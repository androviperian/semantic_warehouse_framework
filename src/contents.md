# Contents

This contents page is intentionally curated as a **book outline**, not a dump of every heading. The left navigation stays concise; chapter-level sections appear inside each chapter as the manuscript grows.

## Part I — Why the Warehouse Must Evolve

1. **From Reporting to Decision Intelligence**  
   Why AI-era analytics requires business understanding, semantic meaning, evidence, and temporal context—not only access to aggregated state.

2. **What Traditional Warehouses Get Right**  
   Why enterprise integration, dimensional simplicity, conformed semantics, and historization remain foundational.

3. **The Missing Questions: What, Who, Where, When, Why, and What If**  
   The reasoning surface required for decision intelligence.

## Part II — The Models We Inherit

4. **Inmon: Enterprise Integration First**  
   The Corporate Information Factory, normalized enterprise modeling, strengths, and trade-offs.

5. **Kimball: Dimensional Consumption First**  
   Facts, dimensions, grain, conformed dimensions, the bus architecture, and why star schemas remain excellent consumption models.

6. **Data Vault: Historization and Change**  
   Hubs, links, satellites, auditability, source alignment, and why Data Vault handles structural evolution well.

7. **Comparing Inmon, Kimball, Data Vault, and the Temporal Semantic Warehouse**  
   A workload-by-workload comparison rather than a claim that one model is universally superior.

## Part III — Building the Canonical Model

8. **Entities: The Nouns of the Enterprise**

9. **Entity Families: Business, Transaction, Resource, and Reference**

10. **Events: The Verbs of the Enterprise**

11. **Transaction Entities Are Not Events**

12. **The Temporal Bus: Relationships Through Time**

13. **Effective Time, Recorded Time, and Corrections**

14. **Entity Lifecycle and Change Semantics**  
   Insert, update, deactivate, merge, split, source deletion, resurrection, source-system conflict, soft delete versus hard delete, and how lifecycle state should be represented without losing historical meaning.

15. **Event Lifecycle, Restatement, and Supersession**  
   When an event is immutable, when a new event corrects a previous business event, when an event must be historically restated from an effective date, and how supersession differs from physical deletion.

## Part IV — Measurements Through Time

16. **From Events to Metric Time Series**

17. **State, Flow, Counts, Ratios, and Temporal Rollups**

18. **Metric Revisions and the Append-Only Ledger**

19. **Backdated Ownership: A Dimensional Restatement**

20. **Payroll Correction: A Business Transition**

21. **Late-Arriving Facts, Events, and Dimensions**  
   Event-time versus arrival-time semantics, watermarks, missing context, deferred enrichment, replay, and how late data changes historical metric and dimensional attribution.

22. **Restatement Windows and Impact Propagation**  
   Recalculate from one event, one effective date, one entity version, or one affected metric slice without rebuilding the entire warehouse.

## Part V — Decision Intelligence

23. **KPI Trees and Driver Graphs**  
    Decomposition, driver semantics, leading and lagging indicators, controllable versus observed drivers, and graph-based metric reasoning.

24. **Root-Cause Analysis**  
    From metric movement to driver decomposition, dimensional attribution, event evidence, process evidence, and supported inference.

25. **What-If and Scenario Analysis**  
    Propagating assumptions through KPI graphs while keeping actuals, targets, forecasts, and simulations distinct.

26. **Process Mining from Canonical Events**  
    Case construction, variants, cycle time, waiting time, loops, rework, conformance, and SLA analysis.

27. **Connecting Process Behavior to KPI Impact**  
    Moving from “this process path is unusual” to “this process path materially affects a business outcome.”

28. **Conversational Analytics**  
    Beyond natural-language-to-SQL: semantic resolution, KPI navigation, temporal context, evidence retrieval, and follow-up reasoning.

29. **Agentic Analytics and Decision Workflows**

30. **Evidence, Explainability, and Audit**

## Part VI — Consumption Without Canonical Compromise

31. **Dimensional Projections for BI**

32. **Semantic Models for Governed Analytics**

33. **Typed Projections and Avoiding Generic-Model Syndrome**

## Part VII — The Framework and Compiler

34. **YAML as a Declarative Business Contract**

35. **Compiler Intermediate Representation**

36. **SQL Generation and Dependency Analysis**

37. **Correction Propagation and Recalculation**

38. **Batch, Micro-Batch, and Streaming as One Semantic Model**  
   The same entity, event, bus, metric, and revision contracts under continuous streaming, scheduled micro-batches, and periodic batch processing; event-time ordering, idempotency, replay, and exactly-once semantics as implementation concerns rather than modeling assumptions.

39. **Change Capture, Replay, and Idempotent Processing**  
   CDC where available, source snapshots where it is not, deterministic event identity, duplicate handling, checkpoints, and replay-safe compilers.

40. **Engine-Neutral Semantics**

41. **Physical Strategies: Delta, Iceberg, Postgres, DuckDB, MySQL, and ClickHouse**

## Part VIII — Putting It Together

42. **End-to-End Global Payroll Example**

43. **End-to-End ARR and Customer Lifecycle Example**

44. **End-to-End Change Scenario: Delete, Late Event, Backfill, and Restatement**  
   A single worked example showing how one source deletion and one late/backdated event propagate through entity history, bus revisions, metric revisions, semantic projections, and audit.

45. **Architecture Patterns and Anti-Patterns**

46. **Scoring the Models by Workload**

47. **Design Principles**

## Appendices

- **A. Canonical Schemas**
- **B. Example YAML**
- **C. Terminology**
- **D. Reference Implementation Notes**
- **E. Lifecycle and Restatement State Machines**
