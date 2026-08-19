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

## Part IV — Measurements Through Time

14. **From Events to Metric Time Series**

15. **State, Flow, Counts, Ratios, and Temporal Rollups**

16. **Metric Revisions and the Append-Only Ledger**

17. **Backdated Ownership: A Dimensional Restatement**

18. **Payroll Correction: A Business Transition**

## Part V — Decision Intelligence

19. **KPI Trees and Driver Graphs**  
    Decomposition, driver semantics, leading and lagging indicators, controllable versus observed drivers, and graph-based metric reasoning.

20. **Root-Cause Analysis**  
    From metric movement to driver decomposition, dimensional attribution, event evidence, process evidence, and supported inference.

21. **What-If and Scenario Analysis**  
    Propagating assumptions through KPI graphs while keeping actuals, targets, forecasts, and simulations distinct.

22. **Process Mining from Canonical Events**  
    Case construction, variants, cycle time, waiting time, loops, rework, conformance, and SLA analysis.

23. **Connecting Process Behavior to KPI Impact**  
    Moving from “this process path is unusual” to “this process path materially affects a business outcome.”

24. **Conversational Analytics**  
    Beyond natural-language-to-SQL: semantic resolution, KPI navigation, temporal context, evidence retrieval, and follow-up reasoning.

25. **Agentic Analytics and Decision Workflows**

26. **Evidence, Explainability, and Audit**

## Part VI — Consumption Without Canonical Compromise

27. **Dimensional Projections for BI**

28. **Semantic Models for Governed Analytics**

29. **Typed Projections and Avoiding Generic-Model Syndrome**

## Part VII — The Framework and Compiler

30. **YAML as a Declarative Business Contract**

31. **Compiler Intermediate Representation**

32. **SQL Generation and Dependency Analysis**

33. **Correction Propagation and Recalculation**

34. **Engine-Neutral Semantics**

35. **Physical Strategies: Delta, Iceberg, Postgres, DuckDB, MySQL, and ClickHouse**

## Part VIII — Putting It Together

36. **End-to-End Global Payroll Example**

37. **End-to-End ARR and Customer Lifecycle Example**

38. **Architecture Patterns and Anti-Patterns**

39. **Scoring the Models by Workload**

40. **Design Principles**

## Appendices

- **A. Canonical Schemas**
- **B. Example YAML**
- **C. Terminology**
- **D. Reference Implementation Notes**
