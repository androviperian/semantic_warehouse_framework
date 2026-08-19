# 1. From Reporting to Decision Intelligence

For most of the history of data warehousing, the central problem was straightforward to describe even when it was difficult to implement:

> Bring data from many operational systems together, reconcile it, preserve history, and make the business easy to analyze.

That problem produced some of the most durable ideas in data architecture. Enterprise integration created consistent views across source systems. Dimensional modeling made analytical queries intuitive. Historized models preserved change. Semantic layers gave business measures stable definitions.

Those ideas still matter. The problem is not that traditional warehousing stopped working.

The problem is that **the job expected of the warehouse is expanding**.

A finance dashboard may ask:

> What was revenue last quarter?

A sales dashboard may ask:

> What is pipeline by region and stage?

A customer-success dashboard may ask:

> What was gross retention last month?

These are analytical questions. They are naturally expressed as measures sliced by dimensions and time.

Decision intelligence begins when the next questions arrive:

> Why did it change?

> What in the business produced that outcome?

> What should we do about it?

> What happens if we change one of the drivers?

Answering those questions reliably requires more than access to data. It requires **business understanding, semantic meaning, and evidence**, all interpreted in the correct temporal context.

---

## 1.1 A number is the beginning of the investigation

Imagine an executive sees the following number on Monday morning:

```text
ARR

Last month       ₹100 Cr
This month        ₹92 Cr
Change             -8%
```

The reporting system has already done something valuable. It has transformed operational complexity into a trusted business measurement.

But the measurement immediately creates another question:

> Why did ARR fall by 8%?

A KPI decomposition may show:

```mermaid
flowchart TB
    ARR["ARR change: -₹8 Cr"]
    CH["Churn: -₹5 Cr"]
    CO["Contraction: -₹2 Cr"]
    FX["FX: -₹1 Cr"]
    ARR --> CH
    ARR --> CO
    ARR --> FX
```

**Figure 1.1 — A metric movement decomposed into business drivers.**

The executive now knows *which drivers* mathematically explain the movement. But that is not yet a business explanation.

The next question is:

> Why did churn increase?

Suppose dimensional analysis shows:

```text
Churn ARR = -₹5 Cr

Enterprise Germany       -₹3.1 Cr
SMB Germany              -₹0.4 Cr
Other regions            -₹1.5 Cr
```

Now the questions become more operational:

> Which customers drove Enterprise Germany churn?

> What happened to those customers before they churned?

> Did they share a product, provider, account owner, implementation team, payroll problem, or process failure?

And finally:

> If the operational problem had been reduced by half, what would ARR have looked like?

The original dashboard question has become a reasoning path.

```mermaid
flowchart TB
    A["Observation: ARR fell 8%"]
    B["KPI decomposition: Which driver moved?"]
    C["Dimensional attribution: Who or where drove it?"]
    D["Business events: What actually happened?"]
    E["Process behavior: How did it happen?"]
    F["Evidence-backed explanation"]
    G["Scenario: What if a driver changes?"]
    H["Decision or action"]
    A --> B --> C --> D --> E --> F --> G --> H
```

**Figure 1.2 — From metric observation to decision.**

This is not merely a more complicated SQL query. Each step requires a different kind of meaning to remain connected to the others.

---

## 1.2 Reporting asks for state; decision intelligence asks for understanding, meaning, and evidence

A conventional analytical question often asks for a state or aggregate:

```text
Revenue by region
Headcount by department
ARR by product
Customers by segment
Invoices outstanding
Payroll cost by country
```

Decision intelligence needs to go further. It needs three complementary foundations.

### Business understanding

Business understanding describes **how the enterprise actually works**: processes and lifecycle, organizational ownership, roles and responsibilities, business rules, commercial relationships, operational dependencies, and the meaning of transitions such as activation, churn, approval, correction, payment, or renewal.

Without business understanding, a system may calculate correctly while interpreting the organization incorrectly.

### Semantic meaning

Semantic meaning tells the system **how data should be interpreted**: what an entity represents, what an event means, how a metric is calculated, which dimensions are valid for a metric, how metrics aggregate through time, how KPI drivers relate mathematically, and which temporal interpretation applies.

Without semantic meaning, the system has records and columns but no reliable model for reasoning about them.

### Evidence

Evidence tells the system **whether a particular inference is supported by what actually occurred**: metric observations, event records, entity history, relationship history, process paths, source lineage, and revisions.

Without evidence, the system may possess a sophisticated business model and still produce an unsupported explanation.

```mermaid
flowchart TB
    subgraph Foundation["Decision Intelligence Foundation"]
        direction LR
        B["Business Understanding"]
        S["Semantic Meaning"]
        E["Evidence"]
    end
    B --> I["Supported Inference"]
    S --> I
    E --> I
    I --> D["Decision"]
    T["Temporal Context: What was true? What was known?"]
    T -.-> B
    T -.-> S
    T -.-> E
```

**Figure 1.3 — Business understanding, semantic meaning, and evidence form the foundation for supported inference. Temporal context applies across all three.**

A useful distinction is:

> **Business understanding tells the system how the enterprise works. Semantic meaning tells it how the data should be interpreted. Evidence tells it whether a particular inference is supported. Temporal context ensures that all three are interpreted as they were true or known at the relevant point in time.**

This becomes concrete in the ARR example.

Business understanding says that customers can start, expand, contract, and churn; that products belong to commercial arrangements; and that ownership, geography, and service relationships may influence outcomes.

Semantic meaning says that one useful ARR bridge is:

```text
Ending ARR
=
Starting ARR
+ New ARR
+ Expansion ARR
- Contraction ARR
- Churn ARR
```

Evidence says that in this particular period:

```text
ARR movement          -₹8 Cr
Churn contribution    -₹5 Cr
```

and allows the analysis to continue into the actual churn events, affected customers, participants, and process histories supporting that explanation.

The distinction is crucial for AI. A language model can make data easier to query, but **natural-language access to a reporting model is not automatically decision intelligence**. The quality of an inference remains bounded by the business context, semantics, and evidence preserved underneath it.

---

## 1.3 The lifecycle is evidence, not operational noise

Consider an invoice.

A reporting model may ultimately care about its final analytical state:

```text
Invoice INV-123
Amount      ₹95,000
Status      PAID
Paid Date   25 Mar
```

Operationally, however, the invoice may have experienced a lifecycle:

```mermaid
flowchart LR
    A["20 Mar: Created ₹100,000"] --> B["21 Mar: Approved ₹100,000"]
    B --> C["22 Mar: Corrected ₹95,000"]
    C --> D["23 Mar: Issued ₹95,000"]
    D --> E["25 Mar: Paid ₹95,000"]
```

**Figure 1.4 — A transaction entity has a lifecycle composed of events.**

The final state is correct, but by itself it cannot answer how many invoices required correction before issue, whether corrected invoices take longer to get paid, which teams or vendors are associated with repeated corrections, or how much working-capital delay is associated with those variants.

The lifecycle is therefore not incidental data around the analytical record. It is evidence about how the business produced the final state.

This introduces a distinction that will become important later:

> **An invoice is an entity. “Invoice corrected” is an event.**

The noun persists. The verbs describe its history.

---

## 1.4 The warehouse is becoming part of the reasoning system

Historically, much of the reasoning happened after the warehouse had done its work.

```mermaid
flowchart LR
    O["Operational Systems"] --> W["Warehouse"]
    W --> R["BI and Reports"]
    R --> H["Human Reasoning"]
```

**Figure 1.5 — In a traditional analytical workflow, much of the semantic navigation happens in the analyst's head.**

The analyst knew which metric to decompose, which dashboard to open next, which operational table contained the relevant transactions, which owner had changed mid-quarter, and how a correction should be interpreted.

Conversational analytics and analytical agents move part of that reasoning into the system itself.

```mermaid
flowchart LR
    Q["Business Question"] --> SR["Semantic Resolution"]
    SR --> KPI["Metric or KPI"]
    KPI --> DG["Driver Graph"]
    DG --> CTX["Business Context"]
    CTX --> EV["Events and Process Evidence"]
    EV --> EX["Explanation"]
    EX --> SC["Scenario or Recommendation"]
```

**Figure 1.6 — AI-era analytics increasingly expects the system to navigate from question to evidence-backed explanation.**

This does not mean the warehouse should become an AI model. It means the data foundation must preserve enough structure for reasoning systems to navigate business meaning without reconstructing it from disconnected artifacts every time.

---

## 1.5 A global payroll example

Global payroll makes this problem especially visible because it combines lifecycle, money, people, geography, ownership, corrections, deadlines, providers, and regulatory context.

Suppose a payroll run is processed on March 20 for €100,000. Validation identifies an error. Payroll is corrected to €95,000 on March 22 and paid on March 25.

```mermaid
flowchart LR
    A["20 Mar: Payroll Processed €100,000"] --> B["22 Mar: Payroll Corrected €95,000"]
    B --> C["25 Mar: Payroll Paid €95,000"]
```

**Figure 1.7 — A correction before payment is a sequence of valid business events, not simply an overwritten value.**

A reporting question may ask how much payroll was paid in Germany in March. The answer is €95,000.

But other questions are equally valid: What amount was initially processed? How much was corrected? How long elapsed between processing and correction? Did correction happen before payment? Was this an isolated correction or part of a recurring process pattern? Is the pattern concentrated under a particular provider, country, client segment, payroll owner, or product configuration? Did correction frequency increase operating cost or reduce payroll margin?

The same business history is serving reporting, audit, process mining, root-cause analysis, and financial decision-making.

A canonical model that keeps only the final paid amount is unnecessarily lossy for those workloads.

---

## 1.6 Time is more complicated than a date dimension

Decision intelligence exposes another problem: there is more than one kind of time.

Suppose an account appears to have been owned by Alice throughout February. On April 5, the source is corrected: Bob actually became the account owner effective February 15.

Two statements are simultaneously meaningful:

1. Bob was the effective owner on February 20.
2. On March 1, the warehouse still believed Alice was the owner.

```mermaid
flowchart TB
    subgraph Effective["Business or Effective Time"]
        A["Jan 1 to Feb 14: Alice"] --> B["Feb 15 onward: Bob"]
    end
    subgraph Revision["Knowledge or Revision Time"]
        C["Mar 1 report: believed Alice"] --> D["Apr 5 correction: Bob effective Feb 15"]
    end
```

**Figure 1.8 — Effective time describes when something was true; revision time describes when that truth was known or recorded.**

For current-state reporting, the distinction may sometimes be hidden. For audit, reconciliation, historical attribution, reproducibility, and AI explanation, it is essential.

Suppose February ARR was originally attributed as ₹10 Cr to Alice-owned accounts and ₹5 Cr to Bob-owned accounts. After the backdated ownership correction, company ARR may still be ₹15 Cr, but the attribution changes.

The total did not change. The dimensional explanation did.

The architecture therefore needs to distinguish:

```text
VALUE RESTATEMENT
The measured value itself changed.

DIMENSIONAL RESTATEMENT
The value stayed the same, but its historical attribution changed.
```

---

## 1.7 Why simply adding more marts eventually becomes fragile

Traditional warehouse architectures can support all of these requirements. One can add transaction facts, periodic snapshots, accumulating snapshots, SCD2 dimensions, bridges, audit tables, event stores, process-mining extracts, semantic models, KPI metadata, scenario tables, lineage metadata, and application-specific history structures.

There is nothing inherently wrong with doing so.

The architectural question is whether these structures repeatedly reconstruct business meaning independently, or whether they are projections from a common semantic foundation.

```mermaid
flowchart TB
    S["Source Systems"]
    S --> BIW["BI Warehouse"]
    S --> PS["Process Store"]
    S --> AS["Audit and History Store"]
    BIW --> BIM["BI Model"]
    PS --> PEM["Process Event Model"]
    AS --> HM["History Model"]
    BIM --> AI["AI Semantic Model"]
    PEM --> AI
    HM --> AI
```

**Figure 1.9 — When analytical, process, audit, and AI models evolve independently, identity, time, relationship, and metric semantics can drift.**

The Temporal Semantic Warehouse asks a different question:

> What canonical business constructs should be preserved so that these consumption models can be generated without repeatedly reconstructing meaning or discarding evidence needed by another workload?

The answer developed through this book is built progressively around entities, events, temporal relationships, metric history, and KPI/driver semantics.

---

## 1.8 Canonical truth and consumption models are different responsibilities

A star schema is an excellent interface for many BI workloads. A canonical event projection is an excellent interface for process mining. A KPI graph is an excellent interface for driver reasoning and simulation. A governed semantic model is an excellent interface for conversational analytics.

These facts do not require the enterprise's canonical representation to be stored in one of those consumption shapes.

```mermaid
flowchart TB
    subgraph Canonical["Canonical Business Model"]
        EN["Entities"]
        EV["Events"]
        TB["Temporal Relationships"]
        MH["Metric History"]
        KG["KPI and Driver Semantics"]
        EN --> TB
        EV --> TB
        TB --> MH
        MH --> KG
    end

    KG --> DP["Dimensional Projection"]
    KG --> SP["Semantic Projection"]
    EV --> PP["Event and Process Projection"]

    DP --> BI["BI"]
    SP --> CA["Conversational AI and Analytics"]
    PP --> PM["Process Mining"]
```

**Figure 1.10 — Preserve richer canonical truth, then generate the consumption shape appropriate to each workload.**

The dimensional projection can be deliberately boring. That is a feature.

The framework is not trying to make every BI consumer understand a temporal graph. It is trying to avoid making temporal relationships, event evidence, and revision history impossible to reconstruct because the canonical model discarded them too early.

This leads to a central principle:

> **Canonical modeling and consumption modeling are different responsibilities.**

---

## 1.9 From descriptive analytics to a decision loop

The evolution can be seen as an expanding analytical loop.

```mermaid
flowchart LR
    A["Descriptive: What happened?"] --> B["Diagnostic: Why?"]
    B --> C["Predictive: What is likely?"]
    C --> D["Prescriptive: What should we do?"]
    D --> E["Simulative: What if?"]
    E --> F["Agentic: Observe, diagnose, recommend, act within policy"]
```

**Figure 1.11 — Decision intelligence extends descriptive reporting into diagnosis, simulation, and action.**

The Temporal Semantic Warehouse is concerned with the data foundation underneath this loop.

It does **not** claim that a warehouse alone provides causal inference, forecasting, optimization, or autonomous decision-making. A KPI tree can encode a known business relationship without proving statistical causality. An event sequence can provide evidence without proving that one event caused another. A process correlation can identify a suspicious operational pattern without establishing a scientific causal mechanism.

The architecture's role is more foundational:

> Preserve and connect enough business meaning and evidence that analytical and AI systems can reason transparently instead of reconstructing context from disconnected tables after the fact.

---

## 1.10 The reasoning surface the warehouse should provide

The remainder of the book can be understood through a set of questions.

**What happened?** Events preserve occurrences and transitions.

**Who or what was involved?** Entities provide identity; participation and relationships connect actors and objects.

**Where and under what context did it happen?** Temporal relationships preserve the dimensional and organizational context valid at the relevant time.

**How much changed?** Event measures and metric time series preserve quantitative state and movement.

**Why did the outcome move?** KPI/driver graphs provide mathematical and business decomposition; temporal relationships provide contextual attribution; events provide operational evidence; process mining provides execution-path evidence.

**What happens if we change something?** Scenario semantics propagate assumptions through the KPI graph while keeping actuals, forecasts, targets, and simulations distinct.

**What did we know when?** Revision semantics preserve corrections and recalculations.

```mermaid
flowchart TB
    Q["Business Question"] --> M["Metric or KPI"]
    M --> K["KPI and Driver Graph"]
    K --> B["Temporal Business Context"]
    B --> E["Canonical Events"]
    E --> P["Process Evidence"]
    P --> X["Supported Explanation"]
    K --> S["Scenario Model"]
    X --> D["Decision"]
    S --> D
```

**Figure 1.12 — The decision-intelligence reasoning surface.**

A useful shorthand is:

```text
WHAT?       → Events
WHO?        → Entities and participation
WHERE?      → Entities and temporal relationships
WHEN?       → Event time and effective time
HOW MUCH?   → Measures and Metric Time Series
WHY?        → KPI graph + Bus + Events + Process
WHAT IF?    → Scenario graph
KNOWN WHEN? → Revision time
```

---

## 1.11 What this book is — and is not — proposing

The Temporal Semantic Warehouse is **not** proposing that dimensional modeling should be abandoned, every query should traverse a generic graph, all events should live forever in one giant EAV table, every relationship should be placed in one universal bus, every metric should be physically materialized, or AI can infer reliable causality merely because events are available.

Instead, the framework proposes several separations of concern:

```text
Canonical truth        ≠ Consumption projection
Business time          ≠ Knowledge or revision time
Entity                 ≠ Event
Transaction entity     ≠ Transaction event
Relationship history   ≠ Entity attribute history
Primitive metric       ≠ Derived semantic metric
Evidence               ≠ Proven causality
Logical semantics      ≠ Physical engine feature
```

Those separations allow the canonical model to remain rich while the consumption experience remains simple.

A BI tool can receive a straightforward star schema.

A conversational analytics layer can receive governed metrics, dimensions, business terminology, and driver relationships.

An analytical agent can move from KPI to evidence.

A process-mining engine can consume lifecycle events.

An audit workflow can inspect previous revisions.

The enterprise does not need one physical modeling shape to serve every one of those consumers.

---

## 1.12 Where the book goes next

This chapter has intentionally introduced the problem before the solution.

Before defining the Temporal Semantic Warehouse in detail, the next chapters examine what existing warehouse traditions already solve well. We will look at the strengths of enterprise integration, dimensional modeling, and historized architectures before comparing Inmon, Kimball, and Data Vault directly.

Only then will the canonical constructs be introduced one by one:

```text
Entity     → What exists?
Event      → What happened?
Bus        → What was related to what, and when?
Metric     → What was measured through time?
Revision   → What did we know or calculate when?
KPI Tree   → How is an outcome related to its drivers?
```

The aim is not to invent abstractions first and search for problems later.

The aim is to preserve the business information required to move from **reporting a number** to **understanding, explaining, simulating, and acting on it**.