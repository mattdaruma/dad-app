import { Injectable } from '@angular/core';
import { AssetService } from './asset.service';
import { Agent } from './agent.interface';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  Agent = this.asset.Get<Agent>('/agent.json').pipe(shareReplay(1))
  constructor(private asset: AssetService) {}
}
