# Contributing to the Temporal Semantic Warehouse Framework

The framework specification is intended to evolve through explicit proposals and review rather than silent changes to core semantics.

## Contribution types

Contributions may include:

- clarification of terminology;
- new or revised normative requirements;
- entity, event, bus, metric, revision, KPI, or process semantics;
- lifecycle and correction behavior;
- source-adapter behavior;
- engine portability guidance;
- conformance tests or examples;
- implementation profiles;
- corrections to contradictions or ambiguous requirements.

## Change process

For material semantic changes, open an issue describing:

1. the problem;
2. a concrete business example;
3. the proposed semantic behavior;
4. compatibility impact;
5. alternatives considered;
6. proposed conformance changes, if any.

A pull request should reference the issue and distinguish **normative** changes from **informative** examples or commentary.

## Normative language

- **MUST / MUST NOT**: required for conformance.
- **SHOULD / SHOULD NOT**: recommended unless a documented reason justifies deviation.
- **MAY**: optional.

Examples, implementation notes, vendor mappings, and appendices are informative unless explicitly marked normative.

## Versioning

- Patch revisions clarify text without changing semantics.
- Minor revisions may add backward-compatible optional capabilities.
- Major revisions may change required semantics or conformance behavior.

Until a stable 1.0 release, the specification is a Working Draft and may change materially.
