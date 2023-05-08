using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using GTranslate.Translators;
using GTranslate.Results;
using System.Diagnostics;
using static System.Runtime.InteropServices.JavaScript.JSType;

using var dbContext = new MyDbContext();

string[] files = Directory.GetFiles("wwwroot/friends", "*.srt");

var translator = new AggregateTranslator();



foreach (var filePath in files)
{

    string fileName = Path.GetFileName(filePath);
    MatchCollection matches = Regex.Matches(fileName, @"(?<=\()[^)]+(?=\))");
    int Session = int.Parse(fileName.Split(" ")[0]);
    int Capture = int.Parse(matches[0].Value);

    string content = await ParseSRT(filePath);
    List<Translate>? list = await setTranslate(content, Session, Capture);
    await dbContext.Translates.AddRangeAsync(list);
    await dbContext.SaveChangesAsync();
}




async Task<List<Translate>?> setTranslate(string text, int Session, int Capture)
{

    string[] textLines = text.Split('\n');
    text = string.Join('\n', textLines.Where(line => !string.IsNullOrWhiteSpace(line)));

    ITranslationResult result = await translator.TranslateAsync(text, "Persian", "English");
    string[] SourceList = result.Source.Split('\n');
    string[] TranslationList = result.Translation.Split('\n');
    List<Translate> finalResult = new List<Translate>();

    for (int i = 0; i < SourceList.Count(); i++)
    {
        finalResult.Add( new Translate
        {
        Content = SourceList[i].Replace("\r", ""),
        Trans = TranslationList[i].Replace("\r", ""),
        Session = Session,
        Capture = Capture
        });
    }

    await Task.Delay(2000);

    return finalResult;

}

async Task<string> ParseSRT(string srtFilePath)
{
    var fileContent = File.ReadAllLines(srtFilePath);

    var content = new List<SrtContent>();

    if (fileContent.Length <= 0)
        return "";


    var segment = 1;
    StringBuilder sb = new StringBuilder();

    for (int item = 0; item < fileContent.Length; item++)
    {
        //   string translate = await Translate(fileContent[item + 2]);

        if (segment.ToString() == fileContent[item])
        {
            sb.AppendLine(fileContent[item + 2]);
            /*
            content.Add(new SrtContent
            {
                Segment = segment.ToString(),
                StartTime = fileContent[item + 1].Substring(0, fileContent[item + 1].LastIndexOf("-->")).Trim(),
                EndTime = fileContent[item + 1].Substring(fileContent[item + 1].LastIndexOf("-->") + 3).Trim(),
                Text = fileContent[item + 2],
            }) ;
            */

            segment++;
            item += 3;
        }
    }

    return sb.ToString();
}


public class MyDbContext : DbContext
{
    public DbSet<Translate> Translates { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=.;Database=Subtitle;Trusted_Connection=True;Encrypt=False");
    }
}

public class SubtitleContext : DbContext
{
    public SubtitleContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<SubtitleEntity> Subtitles { get; set; }
}

public class SubtitleEntity
{
    public int Id { get; set; }
    public string OriginalText { get; set; }
    public string TranslatedText { get; set; }
}

public class Sentence
{
    public string trans { get; set; }
    public string orig { get; set; }
    public int backend { get; set; }
    public string src_translit { get; set; }
}

public class LdResult
{
    public List<string> srclangs { get; set; }
    public List<double> srclangs_confidences { get; set; }
    public List<string> extended_srclangs { get; set; }
}

public class TranslateResult
{
    public List<Sentence> sentences { get; set; }
    public string src { get; set; }
    public double confidence { get; set; }
    public object spell { get; set; }
    public LdResult ld_result { get; set; }
}

public class SrtContent
{
    public string Text { get; set; }
    public string StartTime { get; set; }
    public string EndTime { get; set; }
    public string Segment { get; set; }
    public string Translate { get; set; }
}

public class Translate
{
    [Key]
    public int ID { get; set; }
    public string Content { get; set; }
    public string Trans { get; set; }
    public int Session { get; set; }
    public int Capture { get; set; }
}


