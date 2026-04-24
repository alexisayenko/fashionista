# Fashionista — Token Usage Snapshots

Manual, on-demand captures of Claude Code token usage for this project.
Each section below is one snapshot; newest at the top.

---

## 2026-04-24 16:36 local — window: last 5 hours

**Total: 58,999,117 tokens** across 10 sessions.

| Type | Tokens | Share |
|---|---:|---:|
| Cache reads | 55,825,253 | 94.6% |
| Cache creation | 2,321,765 | 3.9% |
| Output | 850,318 | 1.4% |
| Fresh input | 1,781 | <0.01% |

### Per-session breakdown
| Share | Tokens | Session | Topic (first user message) |
|---:|---:|---|---|
| 26.0% | 15,357,433 | e04b28d7 | Sub-agent isolation for risky image ops |
| 25.3% | 14,943,564 | 916e4b68 | Ranking 20 fashion houses by "coolness" tiers |
| 14.2% |  8,373,040 | df300a16 | Armani life-stage photos on houses page |
| 12.1% |  7,155,450 | 1b3c459f | Analyzing ChatGPT's feedback on the page (RU) |
| 10.2% |  6,042,879 | 529effee | Legality of displaying designer products |
|  6.3% |  3,717,713 | 8dc01ed2 | Image aspect-ratio fixes on armani.html |
|  3.0% |  1,787,417 | d270bc5f | Photo licensing / 4–5 Armani life photos |
|  1.2% |    712,603 | 221254f5 | Permissions config (alex-claude folder) |
|  1.1% |    668,645 | 0b5b55d1 | Permissions config (fashionista folder) |
|  0.4% |    240,373 | 4c7b7a84 | This session — token-stats query |

**Takeaway**: 94.6% of spend was cache reads → driver is session length, not prompt complexity. Two sessions (sub-agent isolation + house ranking) = 51% of the 5-hour total.

---
