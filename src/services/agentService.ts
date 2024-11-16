import { _agents } from '../_mock';

export const departmentArray = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" }
];

const KEYS = {
  agents: "agents",
  agentId: "agentId"
};

export function init() {
  localStorage.setItem(KEYS.agents, JSON.stringify(_agents));
}



export function addAgent(data: TODO) {
  let agents = getAllAgents();
  data["id"] = generateAgentId();
  agents.push(data);
  localStorage.setItem(KEYS.agents, JSON.stringify(agents));
}

export function generateAgentId() {
  if (localStorage.getItem(KEYS.agentId) == null)
    localStorage.setItem(KEYS.agentId, "0");
  const eid = localStorage.getItem(KEYS.agentId);
  var id = parseInt(eid ? eid : "-1");
  localStorage.setItem(KEYS.agentId, (++id).toString());
  return id;
}

export function getAllAgents() {
  if (localStorage.getItem(KEYS.agents) === null) {
    localStorage.setItem(KEYS.agents, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.agents);
  return JSON.parse(es ? es : "");
}


export function getAgentById(id: string | number) {
  if (localStorage.getItem(KEYS.agents) === null) {
    localStorage.setItem(KEYS.agents, JSON.stringify([]));
  }
  const us = localStorage.getItem(KEYS.agents);
  const ul = JSON.parse(us ? us : "");
  return ul.find((u: TODO) => u.id === id);
}