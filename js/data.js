const caseStudies = [
	{
		slug: "design-system",
		title: "The design system that skipped Figma",
		subtitle:
			"A code-first design system built with agentic AI — no handoffs, governed by a custom MCP that keeps every team in sync. Design-to-ship time dropped 30%.",
		thumbnail: "images/thumbnails/designSystem.webp",
		meta: [
			{
				label: "Role",
				value: "Co-led — 1 of 5 designers with prior design-system context, on a 23 person design org",
			},
			{ label: "Team", value: "5 designers + 1 embedded UI engineer" },
			{
				label: "Timeline",
				value: "1 month to a mature system · 2.5 months to migrate the full suite",
			},
			{
				label: "Stack",
				value: "Next.js · Shadcn · Tailwind · Storybook · Custom MCP · Lucide",
			},
		],
		context:
			'<a href="https://www.precisely.com" target="_blank" rel="noopener">Precisely</a> is an enterprise data-integrity company and a recognized leader in the category. Its Data Integrity Suite is a modular set of cloud services for integrating, governing, and improving data at scale, used by thousands of large enterprises. The work below was for this suite.',
		problem:
			"Our design system was well-built in Figma but stalled in code. With too few front-end engineers to maintain it, components drifted between design and build — and every UX validation pass turned into rework.",
		realProblem:
			"The bottleneck wasn't Figma. It was the handoff itself. Across 23 designers on an enterprise suite, everyone improvised their own patterns, a central team couldn't keep pace, and design-system debt took roughly six months to clear each cycle.",
		whatIDid: [
			{
				lead: "Went code-first.",
				body: "Stress-tested agentic AI on production-grade output, then rebuilt the system directly in code on a new stack — leaving the Figma-to-code handoff behind.",
				asset: "images/csAssets/designSystem/whatIDid-asset1.webp",
			},
			{
				lead: "Built a custom MCP.",
				body: "Gave the AI agent live access to the design system, so any feature is auto-checked for compliance — instead of designers manually pointing AI at a cloned repo every build.",
				asset: "images/csAssets/designSystem/whatIDid-asset2.webp",
			},
			{
				lead: "Made it a two-way loop.",
				body: "When the agent flags a gap, it either re-references the rule or surfaces a missing one to contribute back — so the whole org evolves the system, not one central team.",
				asset: "images/csAssets/designSystem/whatIDid-asset3.webp",
			},
			{
				lead: "Set the governance.",
				body: "Defined how designers update components and how engineers consume them, with Storybook as the component source of truth and a documentation layer for everyone else.",
				asset: "images/csAssets/designSystem/whatIDid-asset4.webp",
			},
		],
		impact: [
			{
				lead: "30% faster design-to-ship",
				body: "measured against the prior end-to-end feature average (1.5–2 months, validation loop included).",
				asset: "images/csAssets/designSystem/impact-asset1.webp",
			},
			{
				lead: "Design-system debt: 6 months to clear → 1 week",
				body: "and often none.",
				asset: "images/csAssets/designSystem/impact-asset2.webp",
			},
			{
				lead: "Adopted org-wide",
				body: "with the entire suite migrated off Angular in 2.5 months.",
				asset: "images/csAssets/designSystem/impact-asset3.webp",
			},
			{
				lead: "The design↔dev validation back-and-forth disappeared",
				body: "one role now owns both sides.",
				asset: "images/csAssets/designSystem/impact-asset4.webp",
			},
		],
		hardestCall:
			"Agentic speed was easy, agentic quality wasn't. The real risk was AI pushing unstructured code straight to production. As the org formalized the experience-engineer role, I leaned on pairing designers with the embedded UI engineer to build genuine front-end fluency, and held the system to review gates — so we moved fast without shipping code we couldn't stand behind.",
	},
	{
		slug: "connector-config",
		title: "Connector configuration without hand-holding",
		subtitle:
			"Research-led redesign of a five-step data-configuration flow — replacing jargon and dead ends with a path data stewards could follow alone. Support tickets fell 50%.",
		thumbnail: "images/thumbnails/connectorConfig.webp",
		meta: [
			{ label: "Role", value: "Lead UX Designer" },
			{ label: "Team", value: "Data Configuration + Data Quality" },
			{
				label: "Timeline",
				value: "5.5 months — 1.5 research · 2.5 design · 1.5 development",
			},
			{
				label: "Method & tools",
				value: "Contextual Inquiry · Figma · FigJam · MS Teams · Copilot (analysis)",
			},
		],
		context:
			'<a href="https://www.precisely.com" target="_blank" rel="noopener">Precisely</a> is an enterprise data-integrity company and a recognized leader in the category. Its Data Integrity Suite is a modular set of cloud services for integrating, governing, and improving data at scale, used by thousands of large enterprises. The work below was for this suite.',
		problem:
			"Setting up a data source meant moving through a multi-step flow — source, credentials, catalog, profiling, scheduling — built on non-standard terminology the UI never explained. Scheduling, with its two schedulers, was the worst. Anyone who hadn't used it for years got stuck, and the confusion turned into support tickets.",
		realProblem:
			"The flow had never been researched — every decision rested on the team's own product assumptions, never tested against a user. The friction wasn't one bad screen; nothing on screen told users what it was asking of them, or why. It also boxed them in: routine control over their own data assets — catalog rules, which datasets to profile and score, scheduling specifics, a closing summary — lived in a separate product, so finishing a connector meant detouring out to the Data Catalog to do it.",
		whatIDid: [
			{
				lead: "Ran the flow's first-ever user research.",
				body: "Scoped it, wrote the guide, recruited, and interviewed six support engineers chosen because they didn't know the flow — so the gaps would surface without veteran bias.",
			},
			{
				lead: "Synthesized and aligned.",
				body: "Analyzed in FigJam (and tested Copilot as an analysis aid), then walked design, product, and engineering through the findings to agree on what to build.",
			},
			{
				lead: "Designed three features as one flow.",
				body: "Translated the findings into three feature tickets and designed them in parallel as a single coherent experience, not three patches.",
			},
			{
				lead: "Brought control in-house.",
				body: "Gave users command over their own data assets inside the flow — catalog rules, dataset selection for profiling and scoring, scheduling options, and an end-of-flow summary — instead of forcing a detour to a separate product to get them.",
			},
			{
				lead: "Held the scope line.",
				body: "Kept it a connector-configuration flow — not a launchpad into other suite products — while reconciling overlapping, already-shipped work from the Data Quality team.",
			},
			{
				lead: "Made the case for UX analytics.",
				body: "Used the research to convince product and engineering to stand up proper UX measurement — heatmaps, funnels, event tracking — so future problems could surface in data before they needed a full research cycle.",
			},
		],
		impact: [
			{
				lead: "50% drop in support tickets",
				body: "about understanding the flow — validated with fresh-eyes internal testing before launch.",
			},
			{
				lead: "The flow became self-service",
				body: "users could configure a source, including catalog, profiling, and scheduling controls that used to require a separate product, without hand-holding.",
			},
			{
				lead: "Set the first research baseline",
				body: "for a flow only ever designed on assumption — and got UX analytics onto the roadmap, so future problems surface in data first.",
			},
		],
		hardestCall:
			"Late in the redesign, we found the Data Quality team had already shipped two overlapping features, with a third coming — surfaced only because cross-team communication, especially at the PM level, hadn't been happening. Absorbing them ballooned the scope. The hard judgment was refusing to let the flow sprawl: I pushed to keep it a clean connector-configuration experience rather than a maze of routes into the rest of the suite, even as the pressure to bolt everything on mounted.",
	},
	{
		slug: "command-line",
		title: "Command line to control room",
		subtitle:
			"Turned CLI-only agent management into one visual interface — upgrades, rollbacks, and health monitoring at a glance, with instant outage alerts. Human errors fell 80%.",
		thumbnail: "images/thumbnails/commandLine.webp",
		meta: [
			{
				label: "Role",
				value: "Lead designer & engineer — UX designer on version management, experience engineer on the agent health dashboard (designed and developed with agentic AI)",
			},
			{
				label: "Teams",
				value: "Data Integration (version management) + Data Configuration (agent health dashboard)",
			},
			{
				label: "Timeline",
				value: "2.5mo version-management (design) · 1mo dashboard (design + development)",
			},
			{
				label: "Stack",
				value: "Figma · VS Code · Copilot · Claude Code · Next.js · Shadcn · Tailwind",
			},
		],
		context:
			'<a href="https://www.precisely.com" target="_blank" rel="noopener">Precisely</a> is an enterprise data-integrity company and a recognized leader in the category. Its Data Integrity Suite is a modular set of cloud services for integrating, governing, and improving data at scale, used by thousands of large enterprises. The work below was for this suite.',
		problem:
			"Data stewards managed data agents entirely from the command line — upgrading and rolling back versions by hand. Seeing what a change would affect meant a long chain of commands; knowing whether an agent was even online meant hunting through the CLI or digging into its history on screen. The commands were long and easy to fat-finger.",
		realProblem:
			"Two teams, one root cause: the CLI made routine, high-stakes work — version changes on live agents — both blind and error-prone. Back-end command logs showed people repeatedly mistyping the lengthy commands and burning time just to answer \"what depends on this?\" The fix wasn't a better command. It was making the system's state visible.",
		whatIDid: [
			{
				lead: "Combined two separate efforts",
				body: "version management (Data Integration) and an agent health dashboard (Data Configuration) — into one coherent control surface.",
			},
			{
				lead: "Designed the version-management experience",
				body: "upgrades, rollbacks, and a clear view of dependencies and downstream impact that the CLI kept hidden.",
			},
			{
				lead: "Designed and developed the health dashboard",
				body: "agentically, in code — so stewards get status, history, and instant outage alerts at a glance instead of querying for them.",
			},
			{
				lead: "Climbed into the back end with the engineers",
				body: "to learn how versioning actually works — affected files, dependencies, failure modes — so the UI reflected real system behavior, not a designer's guess.",
			},
			{
				lead: "Pushed for new interaction patterns",
				body: "over the familiar table layout, making the case to PM and engineering for why they served users better.",
			},
		],
		impact: [
			{
				lead: "80% fewer task errors in internal testing",
				body: "validated with support engineers and fresh-eyes back-end engineers. (Production rollout was paused by a company-wide stack migration.)",
			},
			{
				lead: "Dependency impact that took a chain of CLI commands to uncover became visible at a glance.",
				body: "",
			},
			{
				lead: "Customers, shown the work via support engineers, expected a large cut",
				body: "in the time spent managing and monitoring agents.",
			},
		],
		hardestCall:
			"Two fronts. Convincing the PM and engineers to leave the familiar table-style interface for new interaction patterns took repeated discussion and a clear UX rationale. Harder still was the technical climb: to design version management honestly, I had to understand how it actually works under the hood — which files change, what dependencies break, how the process runs — sitting with engineers until the system model was mine, not theirs. That depth is exactly what let me build the dashboard rather than just mock it.",
	},
];
