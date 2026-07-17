"use client";

import { Trophy, Search, TrendingUp, Crown, ShoppingBag, Rocket, Target, Users, BarChart3, Layers } from "lucide-react";

const frankoAccomplishments = [
  {
    icon: Search,
    metric: "#1",
    metricLabel: "Google Page 1",
    title: "Organic SEO Domination",
    desc: "Ranked Franko Trading website on Google's first page for “phone” and related high-competition keywords, competing against national and international retailers.",
  },
  {
    icon: TrendingUp,
    metric: "85%",
    metricLabel: "Growth in 8 Months",
    title: "Sales & Visibility Growth",
    desc: "Grew online sales and brand visibility by 85% within 8 months through integrated digital campaigns, SEO, and conversion optimization.",
  },
  {
    icon: Crown,
    metric: "4 Mo",
    metricLabel: "To Team Lead",
    title: "Fast-Track Leadership",
    desc: "Promoted to Technical Team Lead within four months of joining Franko Trading in recognition of strong technical performance and leadership.",
  },
  {
    icon: ShoppingBag,
    metric: "100%",
    metricLabel: "End-to-End",
    title: "Full E-commerce Ownership",
    desc: "Built and maintained the company's e-commerce website end-to-end, merging technical development with marketing strategy.",
  },
];

const cel7Accomplishments = [
  {
    icon: Rocket,
    title: "Product Roadmap & Delivery",
    desc: "Led product roadmap at Cel 7, shipping 4 major releases in 6 months and delivering MVP 20% ahead of schedule.",
  },
  {
    icon: BarChart3,
    title: "Retention & Activation Growth",
    desc: "Improved user activation and retention by 38% through data-driven prioritization, user research, and iterative releases.",
  },
  {
    icon: Users,
    title: "Cross-functional Leadership",
    desc: "Facilitated collaboration between engineering, design, and marketing teams, reducing delivery cycle time by 25% and improving team velocity.",
  },
  {
    icon: Target,
    title: "Metrics & Strategy",
    desc: "Defined KPIs, PRDs, and product analytics frameworks to guide decisions, align stakeholders, and ensure measurable business impact.",
  },
];

export default function AccomplishmentsSection() {
  return (
    <section className="mt-20 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-display">Accomplishments</h2>
          <p className="text-sm text-muted-foreground font-sans -mt-1">Key wins & impact</p>
        </div>
      </div>

      <div className="divider mb-10" />

      {/* FRANKO TRADING */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium font-display tracking-wide">
            Franko Trading — E-commerce & Technical Lead
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {frankoAccomplishments.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card p-5 md:p-6 
                         hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.04]
                         transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center
                                group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="text-right leading-none">
                  <div className="font-display text-xl font-bold tracking-tight">{item.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-1">
                    {item.metricLabel}
                  </div>
                </div>
              </div>
              <h3 className="font-display font-semibold text-base mb-2">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CEL 7 - PRODUCT MANAGER */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium font-display tracking-wide">
            Cel 7 — Product Manager
          </span>
          <Layers className="w-3.5 h-3.5 text-muted-foreground" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cel7Accomplishments.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-background p-5 md:p-6
                         hover:bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="mt-1 w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center shrink-0
                                group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm md:text-base mb-1.5">{item.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}