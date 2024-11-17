import { _agents, _roles } from '../_mock';

export const roleArray = () => [
  { id: "1", title: 'Sales Leader' },
  { id: "2", title: 'Hr Manager' },
  { id: "3", title: 'Sales Agent' },
  { id: "4", title: 'Sales Operator' },
  { id: "5", title: 'Sales Manager' },
  { id: "6", title: 'Project Manager' },
  { id: "7", title: 'Business Analyst' },
  { id: "9", title: 'Product Designer' },
  { id: "10", title: 'Market Manager' },
  { id: "11", title: 'General Manager' }
]


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

export function updateAgent(data: TODO) {
  let agents = getAllAgents() as TODO;
  let index = agents.findIndex((a: TODO) => a.id === data.id);
  agents[index] = data;
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

export function deleteAgentById(id: string | number) {
  if (localStorage.getItem(KEYS.agents) === null) {
    localStorage.setItem(KEYS.agents, JSON.stringify([]));
  }
  const _agents = localStorage.getItem(KEYS.agents);
  const agents = JSON.parse(_agents ? _agents : "");
  const index = agents.findIndex((u: TODO) => u.id === id);
  agents.splice(index,1)
  localStorage.setItem(KEYS.agents, JSON.stringify(agents));
}


export function getAgentsByPageNumber(
  pageNumber: number, pageSize: number) {
  if (localStorage.getItem(KEYS.agents) === null) {
    localStorage.setItem(KEYS.agents, JSON.stringify([]));
  }
  const es = localStorage.getItem(KEYS.agents);
  const agents = JSON.parse(es ? es : "");

  const size = pageSize > 0 ? pageSize: 10;
  return agents.slice( pageNumber -1, pageSize);
}