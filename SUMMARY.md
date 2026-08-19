# Summary

* [The Temporal Semantic Warehouse](book/README.md)

## Part I — Why the Warehouse Must Evolve
* [1. From Reporting to Decision Intelligence](book/01-from-reporting-to-decision-intelligence.md)
* [2. What Traditional Warehouses Get Right](book/02-traditional-warehouse-strengths.md)
* [3. The Missing Questions: What, Who, Where, When, Why, and What If](book/03-the-missing-questions.md)

## Part II — The Models We Inherit
* [4. Inmon: Enterprise Integration First](book/04-inmon.md)
* [5. Kimball: Dimensional Consumption First](book/05-kimball.md)
* [6. Data Vault: Historization and Change](book/06-data-vault.md)
* [7. Comparing Inmon, Kimball, Data Vault, and the Temporal Semantic Warehouse](book/07-model-comparison.md)

## Part III — Building the Canonical Model
* [8. Entities: The Nouns of the Enterprise](book/08-entities.md)
* [9. Entity Families: Business, Transaction, Resource, and Reference](book/09-entity-families.md)
* [10. Events: The Verbs of the Enterprise](book/10-events.md)
* [11. Transaction Entities Are Not Events](book/11-transaction-entities-vs-events.md)
* [12. The Temporal Bus: Relationships Through Time](book/12-temporal-bus.md)
* [13. Effective Time, Recorded Time, and Corrections](book/13-bitemporal-revisions.md)

## Part IV — Measurements Through Time
* [14. From Events to Metric Time Series](book/14-metric-time-series.md)
* [15. State, Flow, Counts, Ratios, and Temporal Rollups](book/15-metric-behavior.md)
* [16. Metric Revisions and the Append-Only Ledger](book/16-metric-revisions.md)
* [17. Backdated Ownership: A Dimensional Restatement](book/17-backdated-ownership.md)
* [18. Payroll Correction: A Business Transition](book/18-payroll-correction.md)

## Part V — Decision Intelligence
* [19. KPI Trees and Driver Graphs](book/19-kpi-trees.md)
* [20. Root-Cause Analysis](book/20-root-cause-analysis.md)
* [21. What-If and Scenario Analysis](book/21-what-if-analysis.md)
* [22. Process Mining from Canonical Events](book/22-process-mining.md)
* [23. Connecting Process Behavior to KPI Impact](book/23-process-to-kpi.md)
* [24. Conversational Analytics](book/24-conversational-analytics.md)
* [25. Agentic Analytics and Decision Workflows](book/25-agentic-analytics.md)
* [26. Evidence, Explainability, and Audit](book/26-evidence-explainability.md)

## Part VI — Consumption Without Canonical Compromise
* [27. Dimensional Projections for BI](book/27-dimensional-projections.md)
* [28. Semantic Models for Governed Analytics](book/28-semantic-layer.md)
* [29. Typed Projections and Avoiding Generic-Model Syndrome](book/29-typed-projections.md)

## Part VII — The Framework and Compiler
* [30. YAML as a Declarative Business Contract](book/30-yaml-contract.md)
* [31. Compiler Intermediate Representation](book/31-compiler-ir.md)
* [32. SQL Generation and Dependency Analysis](book/32-sql-generation.md)
* [33. Correction Propagation and Recalculation](book/33-correction-propagation.md)
* [34. Engine-Neutral Semantics](book/34-engine-neutrality.md)
* [35. Physical Strategies: Delta, Iceberg, Postgres, DuckDB, MySQL, ClickHouse](book/35-physical-engines.md)

## Part VIII — Putting It Together
* [36. End-to-End Global Payroll Example](book/36-global-payroll-example.md)
* [37. End-to-End ARR and Customer Lifecycle Example](book/37-arr-example.md)
* [38. Architecture Patterns and Anti-Patterns](book/38-patterns-antipatterns.md)
* [39. Scoring the Models by Workload](book/39-scoring.md)
* [40. Design Principles](book/40-design-principles.md)

## Appendix
* [A. Canonical Schemas](book/appendix-a-canonical-schemas.md)
* [B. Example YAML](book/appendix-b-example-yaml.md)
* [C. Terminology](book/appendix-c-terminology.md)
* [D. Reference Implementation Notes](book/appendix-d-reference-implementation.md)