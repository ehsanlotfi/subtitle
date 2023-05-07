using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net.Http;
using System.Text;
using Microsoft.EntityFrameworkCore;
using var dbContext = new MyDbContext();


string content = await ParseSRT("wwwroot/test.srt");
List<Translate>? list = await Translate(content);
dbContext.Translates.AddRange(list);
dbContext.SaveChanges();




async Task<List<Translate>?> Translate(string text)
{

    var url = $"https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=es-ES&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&sl=en&tl=fa&q={text}";

    var client = new HttpClient();
    var request = new HttpRequestMessage(HttpMethod.Get, url);
    request.Headers.Add("Cookie", "NID=511=sE2Z8aUX7eMGyRx1QXHRX15BVmYnYr1klE4attPUlZdud1JfcqM2REpA9QXKxyFGXF0Qg-g5L4HYv0KQOhqqYSDMc9dY72wHLJqlvgDRYted9ZgFXWBrfcQhfULZpT0GsH4MZ0GLGzP5jLe4bllAyXBmKqMY1qfB5NPpfw-MueM");
    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();

    var jsonContent = await response.Content.ReadFromJsonAsync<TranslateResult>();

    return jsonContent?.sentences.Select(x => new Translate
    {
        Content = x.orig,
        Trans = x.trans
    }).ToList();

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
}

