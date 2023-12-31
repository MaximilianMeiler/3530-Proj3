import { makeArray } from './MakeArray';
import { INF } from './HeldKarp'

// greedy algorithm O(n^2)
// follows heuristic of adding the closest vertex not already in the path
export function nearestNeighbor(adjMat) {
  const startTime = performance.now();
  const n = adjMat.length;
  let workingEdges = makeArray(n, n, -1);
  let cur = 0;
  let visited = new Set([0]);
  let totalDist = 0;
  let states = [structuredClone(workingEdges)];
  for(let i = 0; i < n - 1; ++i) {
    let nearest = -1;
    let nearestDist = INF;
    for(let j = 0; j < n; ++j) {
      if(!visited.has(j) && adjMat[cur][j] < nearestDist) {
        nearest = j;
        nearestDist = adjMat[cur][j];
      }
    }
    visited.add(nearest);
    totalDist += adjMat[cur][nearest];

    workingEdges[cur][nearest] = 0;
    states.push(structuredClone(workingEdges));
    
    cur = nearest;
  }
  // go back to start
  totalDist += adjMat[cur][0];
  workingEdges[cur][0] = 0;
  states.push(structuredClone(workingEdges));
  const endTime = performance.now();
  const timeElapsed = endTime - startTime;
  return [totalDist, states, timeElapsed];
}