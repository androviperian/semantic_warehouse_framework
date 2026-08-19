<div class="book-cover">
  <div class="book-kicker">Decision Intelligence Architecture</div>
  <div class="cover-rule"></div>
  <div class="book-title">The Temporal Semantic Warehouse</div>
  <div class="book-subtitle">A Decision Intelligence Architecture for the AI Era</div>
  <div class="book-author">Jeganathan Velu</div>
  <div class="cover-note">Entities · Events · Temporal Relationships · Metrics · KPI Graphs · Evidence</div>
</div>

# About This Book

Data warehouses were largely designed for a world in which the primary analytical question was **what happened?** That remains important, but AI-era decision intelligence asks for more: what changed, who and what participated, what relationships were valid at the time, why a KPI moved, which events and process paths support that explanation, what was later corrected, and what happens if a controllable driver changes.

Inmon, Kimball, and Data Vault each solve important parts of the warehouse problem exceptionally well. The Temporal Semantic Warehouse does not reject those ideas. It asks whether the canonical data foundation can preserve enough **business understanding, semantic meaning, temporal context, and evidence** to support reporting, process analysis, root-cause investigation, scenario analysis, conversational analytics, and analytical agents without forcing every workload into the same physical model.

The model developed in this book is built progressively around:

- **Entities** — the nouns of the enterprise and their changing state.
- **Events** — the business transitions that explain what happened.
- **The Temporal Bus** — historically valid relationships and participation among entities.
- **Metric Time Series** — measurements through business time and revision time.
- **KPI / Driver Graphs** — business and mathematical relationships used for decomposition, root-cause investigation, and scenarios.
- **Evidence and Revisions** — the records needed to support an inference and reproduce what was known at a point in time.

The canonical model is not the only way data is consumed. A BI tool may still receive a straightforward star schema. A semantic layer may expose governed metrics and dimensions. Process mining may consume an event projection. Conversational AI/BI and agents may traverse the richer temporal model. The framework separates **canonical truth** from **consumption projections** so each workload receives the representation best suited to it.

## How to Read This Book

The book is organized as a progression rather than a specification dump.

**Part I — Why the Warehouse Must Evolve** starts with familiar reporting problems and shows how decision-intelligence questions expand the information a data platform must preserve.

**Part II — The Models We Inherit** examines Inmon, Kimball, and Data Vault on their own terms before comparing their strengths with the requirements developed in Part I.

**Parts III and IV** construct the Temporal Semantic Warehouse step by step: entities, events, temporal relationships, effective versus recorded time, metric time series, and revisions.

**Part V — Decision Intelligence** develops KPI trees, root-cause analysis, what-if analysis, process mining, conversational analytics, analytical agents, and evidence-backed explanation.

**Parts VI and VII** show how conventional dimensional projections, semantic models, typed projections, declarative YAML, compiler IR, SQL generation, and cross-engine portability fit around the canonical model.

**Part VIII** brings everything together through end-to-end scenarios and a direct comparison of the major modeling approaches.

> The goal of the book is not to propose complexity for its own sake. It is to preserve the minimum business truth needed to move reliably from **measurement → understanding → inference → decision**.

## License

This work is licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**. See the repository `LICENSE` file for the full license text.
