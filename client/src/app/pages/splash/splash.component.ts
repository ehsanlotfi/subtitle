import { Component, OnInit } from '@angular/core';
import * as _svc from 'src/app/services';
import * as _mod from 'src/app/models';
import { SQLiteService } from '@app/services/sqlite.service';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent
{

  constructor(private _sqlite: SQLiteService)
  { 
    this.initializeApp();
  }


  async initializeApp()
  {
    // create upgrade statements
    await this._sqlite.
    await this._sqlite
      .addUpgradeStatement("ehsan", 1, "yes");
    // create and/or open the database
    await this.openDatabase();
    this.dbVerService.set(this.databaseName, this.loadToVersion);
    const isData = await this.mDb.query("select * from sqlite_sequence");
    // create database initial data
    if (isData.values!.length === 0)
    {
      await this.createInitialData();
    }
    if (this.sqliteService.platform === 'web')
    {
      await this.sqliteService.sqliteConnection.saveToStore(this.databaseName);
    }
    await this.getAllData();
  }

  async openDatabase()
  {
    if (this._sqlite.native
      && (await this._sqlite.isInConfigEncryption()).result
      && (await this._sqlite.isDatabaseEncrypted(this.databaseName)).result)
    {
      this.mDb = await this._sqlite
        .openDatabase(this.databaseName, true, "secret",
          this.loadToVersion, false);

    } else
    {
      this.mDb = await this.sqliteService
        .openDatabase(this.databaseName, false, "no-encryption",
          this.loadToVersion, false);
    }
  }

}