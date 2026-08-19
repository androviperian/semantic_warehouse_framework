# The Temporal Semantic Warehouse

## A Decision Intelligence Architecture for the AI Era

## Why this model?

Enterprise warehouse architectures were largely designed for a world in which the primary job of analytical data was to **report and aggregate what happened**. Inmon provides a durable integrated enterprise model, Kimball makes business analytics intuitive through facts and dimensions, and Data Vault provides powerful historization and source-aligned change capture. Those strengths remain valuable. But decision intelligence in the AI era asks a broader chain of questions: **What changed? Who and what participated? What relationships were true when it happened? Why did a KPI move? Which operational events and process paths produced that movement? What did we believe before a backdated correction? What happens if a driver changes?** Existing models can support many of these questions, but often only through additional marts, snapshots, bridges, audit structures, process stores, semantic models, and application-specific logic layered around the warehouse. The Temporal Semantic Warehouse proposes making the information needed for those questions part of the canonical model itself: **entities preserve identity and state; events preserve business transitions; a temporal bus preserves relationships and participation through time; metric time series preserve measurements and their revisions; and KPI/driver graphs connect those measurements to explanation and simulation.** Dimensional models, semantic models, process views, and AI-facing structures then become generated consumption projections rather than competing sources of truth.

The objective is therefore not to replace Inmon, Kimball, or Data Vault with another universal physical schema. It is to preserve enough **business truth, temporal context, and causal evidence** in the canonical warehouse that different consumers can receive the representation they need without discarding information required by others.

```text
Traditional analytical question

    "What was ARR last month?"
                 │
                 ▼
          Metric / Dashboard

Decision-intelligence questions

    "Why did ARR fall?"
             │
    "Which driver moved?"
             │
    "Which customers, products,
     owners and regions drove it?"
             │
    "What events caused the movement?"
             │
    "Did those events share a
     problematic process path?"
             │
    "Was any history later corrected?"
             │
    "What if churn improves by 15%?"
```

The framework is built around five connected ideas:

- **Entities** describe the things that exist and their temporal state.
- **Events** describe what happened, to whom, where, when, and by how much.
- **The Temporal Bus** describes historically correct relationships and participation among entities.
- **Metric Time Series** preserve measurements through business time and revision time.
- **Decision Intelligence** uses KPI graphs, process mining, root-cause analysis, scenario analysis, conversational analytics, and agents to turn those structures into evidence-backed decisions.

The framework does not reject dimensional modeling. It treats star schemas and other analytical structures as generated consumption projections when they are the best interface for a workload.

> **BI tools can receive a straightforward star schema. Conversational AI/BI can receive a governed semantic model. Agents can traverse the temporal/event graph. Process mining can consume canonical events. Audit can inspect revisions. The enterprise does not have to make one physical modeling style serve every consumer.**

## From warehouse to decision intelligence

```text
                        CANONICAL BUSINESS MODEL

             ┌──────────────────────────────────┐
             │             ENTITIES             │
             │                                  │
             │ Business  Transaction  Resource  │
             │            Reference             │
             └────────────────┬─────────────────┘
                              │
                     identity + state
                              │
                              ▼
                    ┌──────────────────┐
                    │   TEMPORAL BUS   │
                    │ relationships &  │
                    │ participation    │
                    └────────┬─────────┘
                             ▲
                             │
                    ┌────────┴─────────┐
                    │      EVENTS      │
                    │ what / who /     │
                    │ where / when /   │
                    │ how much         │
                    └────────┬─────────┘
                             │
                             ▼
                   ┌────────────────────┐
                   │ METRIC TIME SERIES │
                   │ + revisions        │
                   └─────────┬──────────┘
                             │
                             ▼
                    KPI / DRIVER GRAPH
                             │
             ┌───────────────┼────────────────┐
             ▼               ▼                ▼
       Root-cause        What-if /        Process
        analysis          scenarios        mining
             │               │                │
             └───────────────┼────────────────┘
                             ▼
                 CONVERSATIONAL AI/BI
                             │
                             ▼
                    DECISION / ACTION
```

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

A useful shorthand for the reasoning model is:

```text
Events       → What happened? Who? Where? When? How much?
Temporal Bus → What was related to what at that time?
Metric TS    → What changed and by how much over time?
KPI Tree     → Which business or mathematical driver explains the movement?
Process      → How did the operational path produce the outcome?
Scenario     → What happens if a controllable driver changes?
Revision     → What did we know or calculate at a particular point in time?
```

## License

The written framework and documentation in this repository are licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**. See [`LICENSE`](LICENSE).

Unless explicitly stated otherwise, examples and diagrams in the book are part of the licensed work.