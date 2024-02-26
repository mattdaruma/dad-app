import { Injectable } from '@angular/core';
import { AssetService } from '../asset.service';
import { shareReplay } from 'rxjs';
import { Listing } from './listing.interface';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  public Listings = this.assets.Get<Listing[]>('/listings.json').pipe(shareReplay(1))
  constructor(private assets: AssetService) { }
}
