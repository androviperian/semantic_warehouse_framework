# 1. From Reporting to Decision Intelligence

For most of the history of data warehousing, the central problem was straightforward to describe even when it was difficult to implement:

> Bring data from many operational systems together, reconcile it, preserve enough history, and make it easy for people to analyze the business.

That problem produced some of the most durable ideas in data architecture. Enterprise integration gave organizations a consistent view across source systems. Dimensional modeling made analytical queries understandable and fast. Historized models made it possible to preserve changes without continually redesigning the warehouse.

Those ideas still matter. The problem is not that traditional warehousing stopped working.

The problem is that **the job expected of the warehouse is expanding**.

A finance dashboard may need to answer:

> What was revenue last quarter?

A sales dashboard may ask:

> What is the current pipeline by region and stage?

A customer-success dashboard may ask:

> What was gross retention last month?

These are analytical questions. They are naturally expressed as measures sliced by dimensions and time.

Decision intelligence begins when the next question is asked.

> Why?

And then the next one.

> What should we do about it?

Those two questions change what information the analytical platform must preserve.

---

## 1.1 A simple question becomes a chain of reasoning

Imagine that an executive sees the following number on Monday morning:

```text
ARR

Last month       ₹100 Cr
This month        ₹92 Cr
Change             -8%
```

A reporting system has already done something valuable. It has transformed millions of operational records into a trusted business measurement.

But the number immediately creates another question:

> Why did ARR fall by 8%?

A KPI decomposition might show:

```text
                         ARR CHANGE
                            -₹8 Cr
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
        Churn             Contraction             FX
        -₹5 Cr              -₹2 Cr              -₹1 Cr
```

Now the executive knows **which business drivers** explain the movement.

But that creates another question:

> Why did churn increase?

The analytical system may discover:

```text
Churn ARR = -₹5 Cr

Enterprise Germany       -₹3.1 Cr
SMB Germany              -₹0.4 Cr
Other regions            -₹1.5 Cr
```

Another question follows:

> Which customers drove Enterprise Germany churn?

Then:

> What happened to those customers before they churned?

Then:

> Did they share a product, provider, account owner, implementation team, payroll issue, or process failure?

Then perhaps:

> If the operational issue had been reduced by half, what would ARR have looked like?

The original dashboard question has become a reasoning chain:

```text
                         "ARR fell 8%"
                               │
                               ▼
                       WHAT CHANGED?
                               │
                               ▼
                          KPI DRIVERS
                               │
                               ▼
                    WHERE / WHO DROVE IT?
                               │
                               ▼
                     DIMENSIONAL CONTEXT
                               │
                               ▼
                    WHAT ACTUALLY HAPPENED?
                               │
                               ▼
                            EVENTS
                               │
                               ▼
                     HOW DID IT HAPPEN?
                               │
                               ▼
                       PROCESS BEHAVIOR
                               │
                               ▼
                         WHY DID IT HAPPEN?
                               │
                               ▼
                  EVIDENCE + RELATIONSHIPS
                               │
                               ▼
                       WHAT IF WE CHANGE IT?
                               │
                               ▼
                         SCENARIO MODEL
                               │
                               ▼
                         DECISION / ACTION
```

This is a fundamentally different workload from producing a dashboard.

It is not merely a harder SQL query.

It requires several kinds of business information to remain connected.

---

## 1.2 Reporting asks for state; decision intelligence asks for evidence

A conventional analytical question often asks for a state or aggregate:

```text
Revenue by region
Headcount by department
ARR by product
Customers by segment
Invoices outstanding
Payroll cost by country
```

A decision-intelligence question often asks for the evidence behind that state:

```text
What changed?
What caused the change?
Which business events contributed?
Who participated in those events?
What relationships were valid at the time?
Did a process deviate from its normal path?
Was the historical data later corrected?
Which drivers are controllable?
What happens if we change one of them?
```

That distinction is important.

A warehouse optimized only for the final analytical state may discard or obscure information that later becomes essential for explanation.

Consider an invoice.

A reporting model may ultimately care about:

```text
Invoice INV-123
Amount      ₹95,000
Status      PAID
Paid Date   25 Mar
```

But operationally the invoice may have experienced this lifecycle:

```text
20 Mar   invoice_created       ₹100,000
21 Mar   invoice_approved      ₹100,000
22 Mar   invoice_corrected      ₹95,000
23 Mar   invoice_issued         ₹95,000
25 Mar   invoice_paid           ₹95,000
```

The final state is correct.

But it cannot, by itself, answer:

> How many invoices required correction before issue?

or:

> Are corrected invoices taking longer to get paid?

or:

> Which teams, products, countries, or vendors are associated with repeated correction loops?

or:

> How much working-capital delay is associated with those process variants?

The lifecycle is not noise around the analytical record. It is evidence.

---

## 1.3 The warehouse is becoming part of the reasoning system

Historically, the warehouse was often viewed as the place where data was prepared before reasoning happened elsewhere.

```text
Operational Systems
        │
        ▼
    Warehouse
        │
        ▼
   BI / Reports
        │
        ▼
 Human reasoning
```

The human analyst connected the dots.

They knew that a drop in a metric should be decomposed into drivers. They knew which dashboard to open next. They knew which operational table contained the relevant transactions. They knew that ownership had changed in the middle of the quarter. They knew that a payroll amount had been corrected before payment and should not be interpreted as two independent payroll liabilities.

Conversational analytics and analytical agents change this boundary.

The system itself is increasingly expected to navigate from observation to explanation.

```text
Business Question
       │
       ▼
Semantic Resolution
       │
       ▼
Metric / KPI
       │
       ▼
Driver Decomposition
       │
       ▼
Entities + Relationships
       │
       ▼
Events / Process Evidence
       │
       ▼
Explanation
       │
       ▼
Scenario / Recommendation
```

If the warehouse preserves only the final reporting shape, an AI system can still generate SQL against it. But **natural-language access to a dashboard model is not the same thing as decision intelligence**.

A language model can make querying easier without making the underlying evidence richer.

The quality of the answer remains constrained by what the data model preserved.

---

## 1.4 An example from global payroll

Global payroll illustrates the problem particularly well because it combines lifecycle, money, people, geography, ownership, corrections, deadlines, providers, and regulatory context.

Suppose payroll for a group of employees is initially processed on March 20:

```text
Payroll Run PR-2026-03-DE
Processed amount = €100,000
```

Two days later a validation step identifies an error. Payroll is recalculated:

```text
22 Mar
Corrected amount = €95,000
```

Payment occurs on March 25:

```text
Paid amount = €95,000
```

A reporting question might be:

> How much payroll was paid in Germany in March?

Answer:

```text
€95,000
```

But several other valid questions exist:

> What amount was initially processed?

```text
€100,000
```

> How much was corrected before payment?

```text
-€5,000
```

> How many days elapsed between initial processing and correction?

```text
2 days
```

> Did correction happen before payment?

```text
Yes
```

> Was this an isolated correction or part of a recurring process pattern?

That question requires comparison with other payroll runs.

> Is the correction pattern concentrated under a particular provider, country, client segment, payroll owner, or product configuration?

That requires historically correct relationships between the payroll event and other business entities.

> Did correction frequency materially increase payroll operating cost or reduce margin?

Now process behavior must be connected to KPI impact.

The same underlying data is serving reporting, audit, process mining, root-cause analysis, and financial decision-making.

A warehouse architecture designed only around the final paid amount is unnecessarily lossy for this broader workload.

---

## 1.5 Time is more complicated than a date dimension

Decision intelligence also exposes a second problem: there is more than one kind of time.

Imagine that an account appears to have been owned by Alice throughout February.

On April 5, the source system is corrected:

> Bob actually became the account owner on February 15.

Two statements are now simultaneously meaningful:

1. Bob was the effective owner on February 20.
2. On March 1, the warehouse still believed Alice was the owner.

These answer different questions.

```text
BUSINESS / EFFECTIVE TIME
"Who was actually the owner on Feb 20?"

                Bob

KNOWLEDGE / REVISION TIME
"Who did we believe was the owner
 when we reported on Mar 1?"

                Alice
```

For ordinary current-state reporting, the distinction may not matter.

For audit, reconciliation, historical attribution, model reproducibility, and AI explanation, it matters enormously.

The same issue appears in metrics.

Suppose February ARR was originally attributed as:

```text
Alice-owned accounts   ₹10 Cr
Bob-owned accounts      ₹5 Cr
```

After the backdated ownership correction, the company-level ARR might still be ₹15 Cr, but the attribution changes.

The total did not change.

The dimensional explanation did.

A decision-intelligence architecture must be able to distinguish a **value restatement** from a **dimensional restatement**.

---

## 1.6 Why simply adding more marts eventually becomes a problem

Traditional warehouse architectures can support these requirements.

One can add:

- transaction facts,
- periodic snapshots,
- accumulating snapshots,
- SCD2 dimensions,
- bridge tables,
- audit tables,
- event stores,
- process-mining extracts,
- semantic models,
- KPI metadata,
- scenario tables,
- lineage metadata,
- and application-specific history tables.

There is nothing inherently wrong with doing so.

The architectural question is whether these are independent structures that repeatedly reconstruct business meaning, or projections from a common semantic foundation.

Without a common foundation, an enterprise can gradually develop something like:

```text
                    SOURCE SYSTEMS
                         │
          ┌──────────────┼───────────────┐
          ▼              ▼               ▼
      BI Warehouse   Process Store   Audit Store
          │              │               │
          ▼              ▼               ▼
       BI Model      Event Model     History Model
          │                              │
          └──────────────┐   ┌───────────┘
                         ▼   ▼
                     AI Semantic
                        Model
```

Each layer may be individually sensible, but definitions of identity, time, relationships, and business events can drift.

The Temporal Semantic Warehouse asks a different question:

> What is the smallest canonical set of constructs from which these consumption models can be generated without losing the evidence required by the others?

The answer developed through this book is:

```text
Entities
Events
Temporal Relationships
Metric History
KPI / Driver Semantics
```

Not every implementation needs every construct on day one. The point is that they form a coherent semantic system rather than unrelated analytical add-ons.

---

## 1.7 The canonical model should preserve truth; projections should optimize consumption

This leads to one of the central principles of the framework:

> **Canonical modeling and consumption modeling are different responsibilities.**

A star schema is an excellent consumption model for many BI workloads.

A canonical event stream is an excellent representation for process analysis.

A KPI graph is an excellent representation for driver reasoning and simulation.

A semantic model is an excellent interface for governed conversational analytics.

None of those facts require the entire enterprise to be stored canonically in the same shape.

Instead:

```text
                         CANONICAL MODEL

                    Entities + Events
                           │
                           ▼
                    Temporal Context
                           │
                           ▼
                      Metric History
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Dimensional         Semantic          Event / Process
   Projection          Projection          Projection
        │                  │                  │
        ▼                  ▼                  ▼
       BI           Conversational AI     Process Mining
```

The dimensional projection can be deliberately boring.

That is a feature.

The framework is not trying to make every BI consumer understand a temporal graph.

It is trying to avoid making the temporal graph impossible to reconstruct because the canonical model discarded it too early.

---

## 1.8 From descriptive analytics to a decision loop

A useful way to understand the evolution is through analytical maturity.

```text
DESCRIPTIVE
What happened?
      │
      ▼
DIAGNOSTIC
Why did it happen?
      │
      ▼
PREDICTIVE
What is likely to happen?
      │
      ▼
PRESCRIPTIVE
What should we do?
      │
      ▼
SIMULATIVE
What happens if we change X?
      │
      ▼
AGENTIC
Can the system continuously observe,
diagnose, propose and execute within policy?
```

The Temporal Semantic Warehouse is primarily concerned with the data foundation underneath this loop.

It does not claim that a warehouse alone provides causal inference, forecasting, optimization, or autonomous decision-making.

That distinction matters.

A KPI tree can encode a known business relationship without proving statistical causality. An event sequence can provide evidence without proving that one event caused another. A process correlation can identify a suspicious operational pattern without establishing a scientific causal mechanism.

The architecture's job is more foundational:

> Preserve and connect enough evidence that analytical and AI systems can reason transparently rather than reconstructing context from disconnected tables after the fact.

---

## 1.9 The six questions the model must answer

The remainder of the book can be understood through six questions.

### What happened?

Events preserve business occurrences and transitions.

### Who or what was involved?

Entities provide identity. Event participation and relationships connect the relevant actors and objects.

### Where and under what context did it happen?

Temporal relationships preserve the dimensional and organizational context that was valid at the relevant time.

### How much changed?

Event measures and metric time series preserve quantitative state and movement.

### Why did the outcome move?

KPI/driver graphs provide mathematical and business decomposition; the temporal bus provides contextual attribution; events provide operational evidence; process mining provides execution-path evidence.

### What happens if we change something?

Scenario semantics propagate assumptions through the KPI graph while preserving a clear distinction between actuals, forecasts, targets, and simulated values.

A seventh question cuts across all six:

### What did we know when?

Revision semantics preserve the history of corrections and recalculations.

Together:

```text
WHAT?       → Events
WHO?        → Entities + participation
WHERE?      → Entities + temporal relationships
WHEN?       → Event time + effective time
HOW MUCH?   → Measures + Metric Time Series
WHY?        → KPI graph + Bus + Events + Process
WHAT IF?    → Scenario graph
KNOWN WHEN? → Revision time
```

This is the reasoning surface the framework is intended to provide.

---

## 1.10 What this book is — and is not — proposing

The Temporal Semantic Warehouse is **not** proposing that:

- dimensional modeling should be abandoned,
- every query should traverse a generic graph,
- all events should live forever in one giant EAV table,
- every relationship should be placed in one universal bus,
- every metric should be physically materialized,
- AI can infer reliable causality merely because events are available,
- or one physical implementation is optimal for every database engine.

Instead, the framework proposes several separations of concern:

```text
Canonical truth        ≠ Consumption projection
Business time          ≠ Knowledge / revision time
Entity                 ≠ Event
Transaction entity     ≠ Transaction event
Relationship history   ≠ Entity attribute history
Primitive metric       ≠ Derived semantic metric
Evidence