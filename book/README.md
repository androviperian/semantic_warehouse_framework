# The Temporal Semantic Warehouse

## A Decision Intelligence Architecture for the AI Era

Data warehouses were designed primarily to answer analytical questions. That remains important, but the questions asked of an enterprise data platform are changing.

A dashboard asks:

> What was ARR last month?

A decision-intelligence system is expected to continue:

> Why did it fall? Which customers and products contributed? What business events produced the movement? Did the affected customers share an owner, geography, provider, or process path? Was the historical attribution later corrected? What happens to year-end ARR if churn improves by 15%?

Those questions require more than a convenient aggregation model. They require preservation of **identity, events, relationships, measurements, time, and revisions**.

This book develops a model for that problem from first principles. It does not begin by declaring star schemas obsolete or by proposing another universal physical schema. Instead, it starts with what traditional warehouse models solve well, identifies the additional information required for decision intelligence, and introduces new constructs only when the business problem requires them.

The result is the **Temporal Semantic Warehouse**.

Its canonical model consists of:

```text
Entities
   +
Events
   +
Temporal relationships
   +
Metric history and revisions
   +
KPI / driver semantics
          │
          ▼
Decision Intelligence
```

The canonical model can then produce the interface appropriate for each consumer:

```text
                        CANONICAL BUSINESS MODEL

                  Entities ─────── Events
                     │                │
                     └──────┬─────────┘
                            ▼
                      Temporal Bus
                            │
                            ▼
                   Metric Time Series
                            │
                 ┌──────────┼───────────┐
                 ▼          ▼           ▼
              Star       Semantic    Event / Process
            Projection     Model       Projection
                 │          │           │
                 ▼          ▼           ▼
                BI    Conversational  Process Mining
                         AI/BI
                            │
                            ▼
                    Agents / Decisions
```

A central argument of this book is simple:

> **Do not force the enterprise's canonical representation to become a star schema merely because dashboards prefer stars. Generate a star schema when a star schema is the right consumption interface.**

The same principle applies to every other consumer.

Tableau and Power BI can receive a straightforward dimensional model. Conversational AI/BI can receive governed metrics and dimensions. Agents can traverse entities, relationships, events and KPI drivers. Process mining can consume canonical lifecycle events. Audit can inspect revisions and answer what the organization knew at an earlier point in time.

This is not an argument against Inmon, Kimball, or Data Vault. Each solved important problems, and the Temporal Semantic Warehouse deliberately borrows ideas from all three. The book will compare those approaches in detail before explaining where this model diverges.

The goal is not a new schema for its own sake. The goal is a warehouse foundation capable of answering a larger class of questions:

```text
WHAT happened?        → Events
WHO participated?     → Entities + Bus
WHERE did it happen?  → Entities + Bus
WHEN did it happen?   → Event / effective time
HOW MUCH changed?     → Event measures + Metric Time Series
WHY did the KPI move? → KPI graph + Bus + Events + process evidence
WHAT IF?              → KPI graph + Scenario Engine
WHAT DID WE KNOW?     → Revision time
```

The chapters build toward that model progressively rather than presenting it as a finished abstraction at the outset.