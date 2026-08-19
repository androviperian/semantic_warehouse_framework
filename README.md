# The Temporal Semantic Warehouse

## A Decision Intelligence Architecture for the AI Era

This repository develops an engine-neutral architecture for semantic warehousing built around five ideas:

- **Entities** describe the things that exist and their temporal state.
- **Events** describe what happened, to whom, where, when, and by how much.
- **The Temporal Bus** describes historically correct relationships and participation among entities.
- **Metric Time Series** preserve measurements through business time and revision time.
- **Decision Intelligence** uses KPI graphs, process mining, root-cause analysis, scenario analysis, conversational analytics, and agents to turn those structures into evidence-backed decisions.

The framework does not reject dimensional modeling. It treats star schemas and other analytical structures as generated consumption projections when they are the best interface for a workload.

> Tableau and Power BI can receive a straightforward star schema. Conversational AI/BI can receive a governed semantic model. Agents can traverse the temporal/event graph. Process mining can consume canonical events. Audit can inspect revisions. The enterprise does not have to make one physical modeling style serve every consumer.

## Book

The book is being developed under [`book/`](book/README.md).

Its working title is **The Temporal Semantic Warehouse: A Decision Intelligence Architecture for the AI Era**.

The manuscript compares the framework in depth with **Inmon**, **Kimball**, and **Data Vault**, then develops the model progressively through concrete business scenarios including customer lifecycle, ARR, invoices, ownership changes, and global payroll.

## Core ontology

```text
Entity   = noun / thing with identity
Event    = verb / occurrence or transition
Bus      = historically valid relationship and participation context
Metric   = measurement through time
Revision = what was known or calculated when
KPI Tree = business and mathematical driver graph
```

## License

The written framework and documentation in this repository are licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**. See [`LICENSE`](LICENSE).

Unless explicitly stated otherwise, examples and diagrams in the book are part of the licensed work.