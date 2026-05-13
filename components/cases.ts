export const CASES = [
  // D2C / E-Commerce
  {
    sector: "D2C / E-Commerce",
    brief: "Your D2C apparel brand is doing $10M in revenue but CAC has doubled in the last year due to iOS privacy changes. You are barely breaking even. You have an offer from a major big-box retailer to carry your products, but they demand a 50% wholesale margin and net-90 payment terms.",
    options: {
      A: "Accept the retail deal. Volume will make up for the margin hit.",
      B: "Reject the deal. Double down on organic social and community building.",
      C: "Raise prices by 20% to absorb the higher CAC and stay D2C."
    },
    recommended: "C" as const,
    rationale: "Wholesale with net-90 terms will destroy your cash flow, and 50% margin leaves no room for error. Organic social takes years to build. Raising prices is the fastest way to test true brand equity and restore unit economics. If customers churn because of a 20% hike, your brand wasn't as strong as you thought."
  },
  {
    sector: "D2C / E-Commerce",
    brief: "A viral TikTok video just sold out your hero product, creating a 6-week backorder. You have $500k in cash. You can air-freight new inventory to arrive in 10 days for $300k (wiping out margins), wait 6 weeks for sea freight, or pivot ad spend to a lower-margin secondary product.",
    options: {
      A: "Air-freight the inventory to capitalize on the viral momentum.",
      B: "Wait 6 weeks for sea freight and manage customer expectations.",
      C: "Pivot all ad spend to the secondary product to maintain revenue flow."
    },
    recommended: "B" as const,
    rationale: "Air-freighting ruins your margins and burns cash you need for operations. Pivoting ad spend to a secondary product wastes the specific viral momentum you gained. Communicating transparently and collecting pre-orders for a 6-week wait preserves margins and capitalizes on scarcity."
  },
  {
    sector: "D2C / E-Commerce",
    brief: "Your supplement brand's 'Subscribe & Save' program accounts for 70% of revenue, but month-3 churn has spiked from 15% to 40%. Customers complain they have too much product accumulating. Lowering the default frequency requires a complex platform migration.",
    options: {
      A: "Migrate platforms to allow flexible subscription frequencies.",
      B: "Launch an aggressive retention discount (50% off) for month 3.",
      C: "Reduce the unit size by 20% but keep the price the same."
    },
    recommended: "A" as const,
    rationale: "If customers are churning due to product accumulation, discounting won't solve the core UX issue. Shrinking the product damages brand trust. Biting the bullet and migrating platforms to offer flexibility fixes the root cause and protects the LTV of your core audience."
  },
  {
    sector: "D2C / E-Commerce",
    brief: "You run a premium cookware brand. A well-funded competitor just launched a near-identical knockoff at half the price, aggressively targeting your keywords. Your conversion rate has halved. You operate at a 65% gross margin.",
    options: {
      A: "Launch a 'basics' sub-brand to compete on price.",
      B: "Double down on brand storytelling and increase prices.",
      C: "Cut current prices by 30% to defend market share."
    },
    recommended: "B" as const,
    rationale: "Engaging in a race to the bottom destroys your premium positioning. Launching a sub-brand dilutes focus and takes time. By leaning into quality and effectively raising prices (or holding firm), you differentiate yourself from the cheap knockoff and protect your core margin."
  },

  // SaaS
  {
    sector: "SaaS",
    brief: "You are the CEO of a B2B SaaS company at $5M ARR. Growth has flatlined for two quarters. Your VP of Sales wants to move upmarket to enterprise, which requires a 6-month product rebuild. Your VP of Product wants to launch a freemium tier to drive bottom-up adoption. Cash runway is 14 months.",
    options: {
      A: "Move upmarket. Commit to the 6-month rebuild and target enterprise.",
      B: "Launch freemium. Focus on bottom-up adoption and volume.",
      C: "Fire the VP of Sales. The current product should be selling."
    },
    recommended: "A" as const,
    rationale: "At $5M ARR, you likely have product-market fit but are hitting a ceiling in your current segment. Moving upmarket increases ACV and LTV, which is crucial for the next stage of growth. Freemium is a marketing strategy, not a product strategy, and is incredibly hard to pivot to if it wasn't in your DNA from day one."
  },
  {
    sector: "SaaS",
    brief: "Your SaaS platform charges a flat monthly fee of $99. Power users consume 80% of your server costs, dragging your overall gross margin down to 40%. Switching to usage-based pricing will likely cause immediate churn among legacy users.",
    options: {
      A: "Force transition all users to usage-based pricing immediately.",
      B: "Grandfather legacy users and only apply usage pricing to new signups.",
      C: "Keep the flat fee but implement hard API rate limits."
    },
    recommended: "B" as const,
    rationale: "Forcing a transition destroys goodwill and risks massive churn. Hard rate limits cripple power users who get the most value. Grandfathering protects your core MRR base while fixing the unit economics for all future growth."
  },
  {
    sector: "SaaS",
    brief: "Your main competitor just launched an 'AI-powered' feature suite that is winning them deals, even though it's mostly smoke and mirrors. Your sales team is panicking. Building a true AI solution will take 9 months.",
    options: {
      A: "Ship a fast, superficial AI wrapper to check the box for sales.",
      B: "Ignore the hype and focus on your core workflow features.",
      C: "Acquire a small, struggling AI startup to integrate their tech."
    },
    recommended: "B" as const,
    rationale: "A fake AI wrapper will lead to churn when customers realize it doesn't work. Acquisitions are messy and rarely fast. Focusing on your core workflow and selling against the competitor's 'smoke and mirrors' is the most defensible long-term move."
  },
  {
    sector: "SaaS",
    brief: "During a severe economic downturn, your NRR (Net Retention Rate) has dropped to 85%. Customers are asking for discounts to avoid churning. Your board expects you to hold the line on ACV to protect your valuation.",
    options: {
      A: "Hold firm on pricing. Let the customers who can't pay churn.",
      B: "Offer 30% discounts for annual upfront payments.",
      C: "Downsell customers to cheaper, restricted tiers to keep them."
    },
    recommended: "C" as const,
    rationale: "Holding firm destroys relationships and exacerbates churn. Annual upfront discounts pull forward revenue but hurt long-term ACV. Downselling keeps the customer logo and data in your ecosystem, allowing you to upsell them when budgets recover."
  },

  // Fintech
  {
    sector: "Fintech",
    brief: "Your consumer fintech app has 100k active users but low engagement. A competitor just launched a high-yield savings feature that is poaching your users. Building a similar feature will take 4 months and significant regulatory overhead. You have a partnership offer from a crypto exchange that could be integrated in 3 weeks.",
    options: {
      A: "Build the high-yield savings feature to match the competitor.",
      B: "Integrate the crypto exchange partnership for a quick win.",
      C: "Ignore both. Focus on improving the core user experience."
    },
    recommended: "A" as const,
    rationale: "In fintech, trust and core utility win. High-yield savings is a sticky, core financial product. Crypto is a volatile add-on that might alienate your core user base and introduces different regulatory risks. Taking the 4 months to build the right thing is better than a 3-week distraction."
  },
  {
    sector: "Fintech",
    brief: "Your B2B payment gateway is growing 20% MoM, but chargebacks have spiked. Your AI fraud detection model is too aggressive, declining 15% of legitimate transactions, which is angering your biggest merchants.",
    options: {
      A: "Loosen the fraud model immediately and absorb the chargeback losses.",
      B: "Implement manual review for flagged transactions.",
      C: "Force users to pass 3D-Secure authentication on every transaction."
    },
    recommended: "B" as const,
    rationale: "Loosening the model risks catastrophic financial loss. 3D-Secure introduces massive friction that will tank conversion rates. Manual review is unscalable long-term but is the right short-term bridge to keep merchants happy while you retrain your AI model."
  },
  {
    sector: "Fintech",
    brief: "You built an app for freelance accounting, but growth has stalled. A venture debt firm offers you $20M to pivot the business into an embedded finance API for other SaaS companies. Your current team has zero enterprise sales experience.",
    options: {
      A: "Take the money, pivot, and fire/rehire the GTM team.",
      B: "Reject the money. Double down on freelance marketing.",
      C: "Take the money but try to run both the app and the API in parallel."
    },
    recommended: "A" as const,
    rationale: "If consumer growth has stalled, the market is telling you something. Embedded finance has massive B2B momentum. Running both splits your focus entirely. It is painful, but pivoting hard and restructuring the team is the only way to capitalize on the $20M."
  },
  {
    sector: "Fintech",
    brief: "Your neo-bank relies on interchange fees, which max out at 1.5%. You are unprofitable on a per-user basis. To get profitable, you can launch a premium $15/month subscription tier or start offering predatory payday-style loans.",
    options: {
      A: "Launch the premium subscription tier with perks.",
      B: "Launch the high-interest loan product.",
      C: "Cut marketing spend to zero until organic growth makes you profitable."
    },
    recommended: "A" as const,
    rationale: "Predatory loans destroy brand trust and invite regulatory crackdowns, effectively killing consumer fintechs long-term. Cutting marketing to zero is a slow death. A premium subscription is the proven path to ARPU expansion, even if conversion is initially low."
  },

  // Retail
  {
    sector: "Retail",
    brief: "You run a chain of 15 boutique coffee shops. Foot traffic is down 20% post-pandemic, but average order value is up 15%. Your lease is up for renewal on 3 underperforming downtown locations. The landlord is offering a 10% rent reduction if you sign a 5-year lease.",
    options: {
      A: "Sign the 5-year lease. The rent reduction will improve margins.",
      B: "Close the 3 locations and invest the capital in suburban expansion.",
      C: "Keep the locations but convert them to automated, barista-less kiosks."
    },
    recommended: "B" as const,
    rationale: "A 10% rent reduction doesn't fix a 20% drop in foot traffic. The shift to remote work has structurally changed downtown retail. Closing the underperforming stores stops the bleeding, and suburban expansion follows where the customers actually are."
  },
  {
    sector: "Retail",
    brief: "Your independent bookstore is getting crushed by Amazon. You have 3,000 sq ft of space. You can devote 40% of the floor space to high-margin cafe and merchandise, or vastly expand your inventory density to offer more book titles.",
    options: {
      A: "Expand inventory density to compete on selection.",
      B: "Add the cafe and merchandise to boost margins.",
      C: "Start selling exclusively rare, antiquarian books."
    },
    recommended: "B" as const,
    rationale: "You cannot compete with Amazon on selection or price. You survive by selling an experience. A cafe and merchandise leverage your physical footprint to create a community space and drive high-margin impulse buys."
  },
  {
    sector: "Retail",
    brief: "You have a successful physical streetwear store. Influencers constantly ask for free clothes in exchange for posts. Giving it away hurts your tight inventory, but ignoring them risks brand irrelevance.",
    options: {
      A: "Give free inventory to anyone over 100k followers.",
      B: "Refuse all freebies. Only allow paid ambassador deals.",
      C: "Create a 'loan' program for photoshoots, requiring items back."
    },
    recommended: "C" as const,
    rationale: "Giving away tight inventory kills margins. Paid deals are too expensive. A styling/loan program protects your inventory while still getting the influencer placement, establishing your store as a premium resource rather than a charity."
  },
  {
    sector: "Retail",
    brief: "Your regional grocery chain is facing margin compression. National brands (Coca-Cola, Kraft) are raising prices by 12%. You can absorb the cost, pass it to consumers, or aggressively push your cheaper private-label (store brand) products.",
    options: {
      A: "Pass the 12% price increase directly to consumers.",
      B: "Absorb the cost to maintain price leadership.",
      C: "Delist several national brands and push private-label."
    },
    recommended: "C" as const,
    rationale: "Absorbing a 12% hit in grocery margins is fatal. Passing it on angers consumers. Pushing private-label protects your margins, gives consumers a cheaper option, and forces the national brands to negotiate better terms later when their volume drops."
  },

  // Healthcare
  {
    sector: "Healthcare",
    brief: "Your telehealth startup connects patients with specialists. You currently charge a flat $100 fee per consultation. Patient acquisition cost is $40. A major insurance provider wants to include you in their network, which would guarantee volume but cap your reimbursement at $60 per consultation.",
    options: {
      A: "Accept the insurance deal for guaranteed volume and lower CAC.",
      B: "Reject the deal and maintain the $100 direct-to-consumer model.",
      C: "Pivot to a B2B model, selling the platform to employers."
    },
    recommended: "B" as const,
    rationale: "Accepting $60 when your CAC is $40 leaves only $20 to pay the specialist and cover overhead — you will lose money on every visit. The insurance deal destroys your unit economics. You must maintain the $100 fee and focus on lowering CAC or increasing LTV."
  },
  {
    sector: "Healthcare",
    brief: "You developed an AI triage app for ERs. Hospitals love it, but their IT departments are blocking it due to deep PHI (Protected Health Information) integration risks. A competitor is selling a dumbed-down SMS tool that requires zero IT integration.",
    options: {
      A: "Wait out the IT departments and strictly sell the fully integrated AI.",
      B: "Build a standalone 'lite' version that requires zero IT integration.",
      C: "Partner with EMR giants (Epic/Cerner) to be their native tool."
    },
    recommended: "B" as const,
    rationale: "Waiting out hospital IT departments takes years and you will run out of cash. EMR partnerships are notoriously slow and predatory. A 'lite' standalone version gets you in the door immediately, proves value, and forces IT to integrate later when doctors demand it."
  },
  {
    sector: "Healthcare",
    brief: "Your mental health platform relies on contract therapists. Demand has surged 300%, but you have a 4-week waitlist because you can't hire therapists fast enough. Retaining them requires paying above market rate, crushing your margins.",
    options: {
      A: "Increase therapist pay to clear the waitlist at the cost of margin.",
      B: "Introduce AI chatbots to handle low-acuity cases.",
      C: "Cap new patient signups to maintain quality of service."
    },
    recommended: "C" as const,
    rationale: "AI chatbots for mental health carry massive liability risk. Crushing your margins destroys the business model. Capping signups creates exclusivity and protects clinical quality, which is the only long-term moat in healthcare."
  },
  {
    sector: "Healthcare",
    brief: "Your medical device startup built a revolutionary glucose monitor. The FDA just requested a Phase III trial extension that will cost $5M and delay launch by 18 months. You have $6M in the bank. You can pivot to selling it as a general 'wellness' tracker (avoiding FDA).",
    options: {
      A: "Do the FDA trial extension and operate on a shoestring budget.",
      B: "Pivot to the unregulated wellness market.",
      C: "Sell the IP to a massive medical incumbent right now."
    },
    recommended: "A" as const,
    rationale: "The 'wellness' market is incredibly saturated, and you lose clinical differentiation. Selling the IP now, pre-approval, guarantees a lowball valuation. Completing the FDA trial protects the deep clinical moat and is the only path to a multi-billion dollar outcome."
  },

  // Edtech
  {
    sector: "Edtech",
    brief: "Your coding bootcamp has a 90% placement rate, but income share agreements (ISAs) are facing new regulatory scrutiny. 80% of your students use ISAs. You need to transition away from them, but upfront tuition of $15,000 will price out most of your demographic.",
    options: {
      A: "Partner with a third-party lender to offer traditional student loans.",
      B: "Switch to a monthly subscription model for self-paced learning.",
      C: "Target corporate training budgets instead of individual students."
    },
    recommended: "A" as const,
    rationale: "Your core value proposition is the 90% placement rate, which requires intensive, cohort-based instruction. A self-paced subscription destroys that model. Corporate training is a completely different business. Third-party lending keeps your core model intact while shifting the regulatory risk."
  },
  {
    sector: "Edtech",
    brief: "Your language learning app uses gamification. Daily active users (DAU) are massive, but they only use the free tier. Paid conversion is an abysmal 0.8%. Locking advanced lessons behind a paywall angers the community and drives bad App Store reviews.",
    options: {
      A: "Lock features anyway. Reviews are temporary, revenue is necessary.",
      B: "Introduce aggressive, unskippable video ads for free users.",
      C: "Pivot to a B2B model and sell licenses to schools."
    },
    recommended: "B" as const,
    rationale: "Locking previously free features creates a hostile community revolt that can permanently tank your App Store ranking. B2B school sales have a notorious 2-year sales cycle. Ads generate immediate revenue and naturally incentivize power users to pay for a premium, ad-free experience."
  },
  {
    sector: "Edtech",
    brief: "You offer live, cohort-based leadership courses for executives ($2,000 per seat). 95% of revenue comes from individuals expensing it to their employer. With an impending recession, corporate L&D budgets are being frozen.",
    options: {
      A: "Drop the price to $500 to attract out-of-pocket individuals.",
      B: "Record the courses and sell them asynchronously for $200.",
      C: "Maintain the price but guarantee an ROI/Promotion metric."
    },
    recommended: "A" as const,
    rationale: "Async courses lack the networking value that executives actually pay for. Guaranteeing a promotion is legally risky and unprovable. Dropping the price makes it an accessible, out-of-pocket career investment during a time when people are desperate to upskill and protect their jobs."
  },
  {
    sector: "Edtech",
    brief: "Your K-12 math platform is loved by teachers but ignored by district administrators, who hold the actual budget. Selling top-down takes 18 months, but relying on teachers paying out-of-pocket is unprofitable.",
    options: {
      A: "Make it free for teachers, then extort the district for data access.",
      B: "Abandon K-12 and pivot the product to adult continuing education.",
      C: "Sell exclusively directly to parents as a tutoring supplement."
    },
    recommended: "C" as const,
    rationale: "Extorting districts ruins your reputation. Pivoting to adults wastes your math curriculum IP. The direct-to-parent market is massive, bypasses school district bureaucracy entirely, and has immediate willingness-to-pay for their child's success."
  },

  // Real Estate
  {
    sector: "Real Estate",
    brief: "You manage a portfolio of Class B office buildings. Occupancy has dropped to 60%. You have $10M in capital to deploy. You can either upgrade the amenities to try and attract Class A tenants, or convert the buildings into mixed-use residential/commercial spaces.",
    options: {
      A: "Upgrade amenities to compete for premium office tenants.",
      B: "Convert to mixed-use residential/commercial.",
      C: "Sell the portfolio at a loss and reinvest in industrial real estate."
    },
    recommended: "B" as const,
    rationale: "Class B office space is the most vulnerable asset class in a remote-work world. Upgrading amenities won't change the macro trend. Conversion to mixed-use addresses the structural housing shortage and repurposes the asset for long-term viability."
  },
  {
    sector: "Real Estate",
    brief: "You own 50 single-family rental homes in a booming tech city. Property taxes have surged 40%, eating your cash flow. You can raise rents dramatically (risking high vacancy), sell the houses individually, or transition them to short-term Airbnb rentals.",
    options: {
      A: "Raise rents to cover the taxes and accept the vacancy risk.",
      B: "Deploy capital to furnish them and switch to Airbnb.",
      C: "Sell 15 houses individually to cover the tax burden of the rest."
    },
    recommended: "C" as const,
    rationale: "Massive rent hikes cause costly turnovers. Switching 50 homes to Airbnb is an operational nightmare and faces massive regulatory risk in tech cities. Selling a portion trims your portfolio, captures the equity appreciation, and secures the cash flow for the remaining assets."
  },
  {
    sector: "Real Estate",
    brief: "Your proptech startup automates tenant background checks. Real estate agents are your main users, but large property management software (PMS) companies are threatening to build native alternatives.",
    options: {
      A: "Sell the company quickly to a major PMS platform.",
      B: "Offer your API exclusively to one massive PMS platform.",
      C: "Expand features to manage rent collection, competing directly with PMS."
    },
    recommended: "B" as const,
    rationale: "Selling immediately leaves money on the table. Building rent collection pits you against giant incumbents with deep pockets. Partnering exclusively with one PMS weaponizes your tech against their rivals, embedding you deeply while maintaining your independence."
  },
  {
    sector: "Real Estate",
    brief: "You acquired a massive, abandoned shopping mall. Demolishing it for residential zoning will take 5 years of regulatory fights. Local fulfillment centers (Amazon, last-mile logistics) are desperate for warehouse space near the suburbs.",
    options: {
      A: "Fight the 5-year zoning war to build lucrative residential condos.",
      B: "Keep it as a mall and try to attract experiential retail (VR, arcades).",
      C: "Retrofit the interior for last-mile logistics and lease to e-commerce."
    },
    recommended: "C" as const,
    rationale: "Experiential retail requires massive capital and is risky. 5 years of zoning battles carries massive carrying costs with zero revenue. Retrofitting for last-mile logistics capitalizes on immediate e-commerce demand, requires minimal structural changes, and generates rapid cash flow."
  },

  // Logistics
  {
    sector: "Logistics",
    brief: "Your last-mile delivery startup relies on gig workers. A new state law will classify them as employees, increasing your labor costs by 30%. You currently operate on razor-thin margins. You have a 12-month contract with your biggest client that does not allow for price increases.",
    options: {
      A: "Absorb the cost and operate at a loss until the contract expires.",
      B: "Break the contract, raise prices, and risk losing the client.",
      C: "Pull out of the state entirely and focus on unregulated markets."
    },
    recommended: "B" as const,
    rationale: "Operating at a loss for 12 months with a 30% cost increase will likely bankrupt the company. Pulling out of the state abandons your investment. Breaking the contract forces a renegotiation; the client also needs the deliveries made and may accept a price increase rather than finding a new vendor overnight."
  },
  {
    sector: "Logistics",
    brief: "You run a cross-country freight brokerage. Fuel prices just spiked 40% in two weeks. Your carrier network (the truckers) are demanding higher rates immediately, but your shipper clients are locked into quarterly static-rate contracts.",
    options: {
      A: "Force the shippers to accept fuel surcharges despite the contract.",
      B: "Refuse the truckers' demands and risk them dropping your loads.",
      C: "Take the margin hit and subsidize the fuel costs for the truckers."
    },
    recommended: "A" as const,
    rationale: "Subsidizing 40% fuel spikes will wipe out your cash reserves instantly. If truckers drop your loads, your service fails entirely. Shippers hate unexpected fees, but fuel surcharges are a known industry reality. You preserve operations and truckers' trust, taking the heat from shippers."
  },
  {
    sector: "Logistics",
    brief: "You operate a regional D2C fulfillment center. Your peak season (Q4) requires triple the warehouse staff. A robotics firm offers an automated picking system that would reduce temp labor by 70%, but requires a $2M upfront capital expenditure.",
    options: {
      A: "Finance the $2M robots to permanently solve the labor bottleneck.",
      B: "Stick with human temp labor to stay asset-light and flexible.",
      C: "Lease a secondary warehouse just for Q4 processing."
    },
    recommended: "A" as const,
    rationale: "Temp labor reliability is a massive operational risk during Q4; if humans don't show up, you fail the SLA. Leasing extra space just duplicates the labor problem. The robotics capex permanently stabilizes your unit economics and creates a massive scaling moat."
  },
  {
    sector: "Logistics",
    brief: "Your port-drayage company moves containers from ships to railhead. The port union just went on strike, freezing all movement. You have 40 trucks sitting idle costing $20,000 a day. The strike could last 3 days or 3 months.",
    options: {
      A: "Furlough the drivers immediately to preserve cash.",
      B: "Pay the drivers to wait, preserving loyalty for when it ends.",
      C: "Pivot the trucks to long-haul interstate freight temporarily."
    },
    recommended: "C" as const,
    rationale: "Furloughing drivers means they will find other jobs, crippling you when the port reopens. Paying them to sit still burns cash infinitely. Pivoting to long-haul keeps revenue flowing and drivers employed, even if it's outside your core competency."
  }
];
