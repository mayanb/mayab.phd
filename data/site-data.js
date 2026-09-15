window.SITE_DATA = {
  profile: {
    name: "Maya Balakrishnan",
    title: "Assistant Professor of Operations Management",
    institution: "Naveen Jindal School of Management, The University of Texas at Dallas",
    email: "maya.balakrishnan@utdallas.edu",
    location: "Richardson, Texas",
    bio: `I am an Assistant Professor of Operations Management at the Naveen Jindal School of Management at The University of Texas at Dallas. My research examines how people and organizations interact with artificial intelligence and other operational systems, with a particular focus on human–AI collaboration, behavioral operations, and operational transparency.`,
    bio2: `My work combines controlled experiments, field and archival data, econometrics, machine learning, and computational methods. I received my PhD in Technology and Operations Management from Harvard Business School and my BS in Computer Science, with a specialization in Human-Computer Interaction, from Stanford University. Before graduate school, I worked at Microsoft and Goldman Sachs and co-founded a venture-backed software company for food manufacturers.`,
    links: [
      {label: "CV", href: "assets/Maya_Balakrishnan_CV.pdf"},
      {label: "UT Dallas", href: "https://jindal.utdallas.edu/"},
      {label: "ORCID", href: "https://orcid.org/0000-0002-7823-1808"}
    ]
  },

  researchOverview: `I study the behavioral side of operational systems: when human judgment improves algorithmic decisions, when it introduces systematic error, and how organizations can design processes that help people and AI work better together. A second stream of my research examines how transparency about a firm's operations shapes consumer perceptions and choice.`,

  publications: [
    {
      title: "Human-Algorithm Collaboration with Private Information: Naïve Advice-Weighting Behavior and Mitigation",
      authors: "Maya Balakrishnan, Kris Johnson Ferreira, and Jordan Tong",
      venue: "Management Science 72(1): 265–284",
      year: "2025",
      note: "Special Issue on the Human-Algorithm Connection",
      href: "https://doi.org/10.1287/mnsc.2022.03850",
      abstract: `Even when algorithms outperform humans on average, people may possess private information that can improve an algorithm's prediction. We study how people decide whether and how much to override algorithmic forecasts when the value of their private information varies across decisions. Across three experiments, we find that people rely on a naïve advice-weighting rule: they combine their own judgment with the algorithm using a relatively constant weight, which produces over-adherence when private information is valuable and under-adherence when it is not. This behavior increases prediction error substantially. Feature transparency helps users better identify when and how to deviate from an algorithm, and a targeted intervention that encourages people to use private information only to determine deviations further improves performance. The results show how process design can help humans contribute information an algorithm does not observe without introducing unnecessary judgmental error.`,
      awards: [
        "1st place, 2023 POMS College of Behavioral Operations Management Junior Scholar Paper Competition",
        "2nd place, 2023 INFORMS Behavioral Operations Management Best Working Paper Competition",
        "2022 Advances in Decision Analysis Best PhD Blitz Presentation"
      ]
    },
    {
      title: "Warnings and Endorsements: Improving Human–AI Collaboration in the Presence of Outliers",
      authors: "Matthew DosSantos DiSorbo, Kris Johnson Ferreira, Maya Balakrishnan, and Jordan Tong",
      venue: "Manufacturing & Service Operations Management 27(6): 1814–1831",
      year: "2025",
      href: "https://doi.org/10.1287/msom.2024.0854",
      abstract: `AI predictions tend to be more reliable for observations that resemble the training data than for observations that fall outside it, yet users may not adjust their reliance accordingly. We study human–AI prediction tasks containing both inliers and outliers and find that people exhibit naïve adjusting behavior: their adjustments to the algorithm are too similar across the two types of observations, even though larger adjustments are warranted for outliers. This failure to differentiate substantially increases deviation from the optimal prediction. We then test simple educational interventions. Warnings identify outliers, while endorsements identify inliers; each improves the corresponding adjustment behavior, and providing both together produces the largest performance gains. A final experiment shows that these interventions remain useful for borderline observations just outside the range of the training data. The findings identify a behavioral failure in human–AI collaboration and a lightweight way to mitigate it.`,
      awards: ["1st place, 2024 POMS College of Behavioral Operations Management Junior Scholar Paper Competition (student awardee: Matt DiSorbo)"]
    },
    {
      title: "Differentiating on Diversity: How Disclosing Workforce Diversity Influences Consumer Choice",
      authors: "Maya Balakrishnan, Jimin Nam, and Ryan W. Buell",
      venue: "Production and Operations Management 34(3): 457–474",
      year: "2025",
      href: "https://doi.org/10.1177/10591478241239934",
      abstract: `Many organizations face pressure not only to improve workforce diversity, but also to disclose their progress. Across five online experiments, we examine how consumers respond when firms make workforce diversity data transparent. We find no evidence that disclosure harms customer attitudes or behavior, even when the data reveal racial disparities across job categories. Instead, consumers infer that firms willing to disclose are more committed to diversity, equity, and inclusion, evaluate those firms more positively, and are more likely to choose their offerings than those of firms that do not disclose. These effects are especially pronounced when disclosures reveal progress in diversification. The results suggest that operational transparency can itself shape consumer perceptions of a firm's commitment, and that companies may be able to differentiate through disclosure even when their workforce data are not uniformly flattering.`,
      awards: ["Finalist, 2023 INFORMS Service Science Best DEIJ Paper Competition"]
    },
    {
      title: "Speedy Activists: How Firm Response Time to Sociopolitical Events Influences Consumer Behavior",
      authors: "Jimin Nam, Maya Balakrishnan, Julian De Freitas, and Alison Wood Brooks",
      venue: "Journal of Consumer Psychology 33(4): 632–644",
      year: "2023",
      href: "https://doi.org/10.1002/jcpy.1380",
      abstract: `Organizations increasingly face pressure to take public positions on sociopolitical events, but acting quickly can feel risky when firms are concerned about missteps or appearing inauthentic. Using social-media data and three online experiments, we study how response speed shapes consumer reactions to corporate activism. Consumers express more positive sentiment and greater purchase intentions toward firms that respond more quickly. Unlike settings such as product launches, where deliberation can signal care, consumers interpret speed in sociopolitical response as evidence of authentic commitment to the issue. We also identify an important boundary condition: the benefit of speed is substantially smaller when the issue is highly divisive along political lines. The findings connect operational response time to consumers' inferences about authenticity and provide guidance for firms deciding when to speak after sociopolitical events.`,
      awards: ["One of the top 10 most-cited Journal of Consumer Psychology papers published in 2023"]
    }
  ],

  workingPapers: [
    {
      title: "Guardrails and Goals: How Task–Stance Fit Shapes Workers’ Choice and Use of Generative AI",
      authors: "Maya Balakrishnan and Jimin Nam",
      status: "Under review at Production and Operations Management",
      href: "https://drive.google.com/file/d/1f_xQFjYYzxPMxBmLlPwNbN0_w12-k1X8/view?usp=share_link",
      abstract: `Generative AI models differ not only in capability but also in how they are positioned to balance user goals against safety guardrails. Across two preregistered, incentive-compatible experiments (N = 1,344), we show that users treat this operating stance as a task-relevant product attribute. A cautious task increased choice of a safety-oriented assistant from roughly 55% to 78%. When users were assigned an assistant, task–stance fit improved perceived understanding and reuse intentions, while the assistant’s stance sharply altered which uncomfortable accountability facts appeared in customer communications. The value of an AI’s stance therefore depends on the task it supports.`
    }
  ],

  researchInProgress: [
    {
      title: "Teaching ‘I Know It When I See It’ to AI: Human–AI Collaboration for Transferring Tacit Decision Rules",
      authors: "Maya Balakrishnan and Jordan Tong",
      status: "Experiments complete; writing paper",
      summary: `People often know how to make a good decision without being able to fully articulate the rule they use. In a controlled task, participants learn a hidden decision rule through practice and feedback, then teach an AI either by writing natural-language instructions or by labeling new examples. We study which channel better transfers tacit knowledge, whether people know which teaching method will work best, and what information is lost when expertise must be translated into words or demonstrations.`
    },
    {
      title: "The Human in the Data Pipeline: Behavioral Biases in Training Data Set Curation for AI",
      authors: "Maya Balakrishnan and Jimin Nam",
      status: "Experiments complete; writing paper",
      summary: `AI performance depends not only on the model, but also on the human decisions that determine what data the model learns from. We study how people curate training data when an environment changes gradually versus abruptly, forcing them to trade off data freshness against sample size. The project examines whether decision-makers distinguish distribution drift from shocks, how they decide which historical observations to retain or discard, and how these choices affect model accuracy and stability.`
    },
    {
      title: "Consumer Choices and Learning under Differential Privacy",
      authors: "Maya Balakrishnan, Jimin Nam, D. Huang, and N. Ahmadi",
      status: "Experiments conducted; analyzing data",
      summary: `Differential privacy creates a tradeoff between personalization and protection: stronger privacy can reduce the precision of information a service uses to match or recommend options. In a repeated-choice setting, we study how consumers choose among services with different privacy levels and match quality, how they learn about the consequences of those choices over time, and how perceived breach risk shapes demand for privacy.`
    }
  ],

  otherPublications: [
    {year:"2025", title:"The Indispensable Human in the Age of AI", venue:"OR/MS Tomorrow", href:"https://www.informs.org/Publications/OR-MS-Tomorrow/ORTM_FallWInter_2026"},
    {year:"2024", title:"Speed Matters When Companies Respond to Social Issues", venue:"Harvard Business Review", authors:"Alison Wood Brooks, Jimin Nam, Maya Balakrishnan, and Julian De Freitas", href:"https://hbr.org/2024/07/research-speed-matters-when-companies-respond-to-social-issues"},
    {year:"2024", title:"Why Companies Should Share Their DEI Data (Even When It’s Unflattering)", venue:"Harvard Business School Working Knowledge", authors:"Ryan W. Buell, Jimin Nam, and Maya Balakrishnan", href:"https://www.library.hbs.edu/working-knowledge/why-companies-should-share-dei-data-even-when-its-unflattering"}
  ],

  teaching: [
    {institution:"University of Texas at Dallas", courses:[
      {name:"AI in Supply Chain Management", detail:"Undergraduate and master's courses designed and launched at UT Dallas. The courses cover forecasting, machine learning, optimization, sequential decision-making, generative AI, and human–AI collaboration through operational applications."},
      {name:"Managerial Methods in Decision Making under Uncertainty", detail:"Undergraduate introduction to probability and business statistics."}
    ]},
    {institution:"Harvard Business School", courses:[
      {name:"Technology and Operations Management", detail:"MBA Teaching Fellow, Fall 2021 and Fall 2022."},
      {name:"Introduction to Python for Researchers", detail:"Co-developed and co-taught a three-day workshop for doctoral students and research assistants."}
    ]},
    {institution:"Stanford University", courses:[
      {name:"Introduction to Computer Science", detail:"Teaching Assistant."}
    ]}
  ],

  teachingInnovation: {
    title:"Raising the Ceiling on What Students Can Learn with AI",
    venue:"M&SOM Conference Teaching Innovations Session, Boston, July 2026",
    text:"My AI-in-supply-chain courses treat generative AI as a learning partner while raising expectations for what students can understand and build. Students use AI to accelerate implementation, then demonstrate conceptual understanding through offline assessment, model critique, and operational decision-making."
  },

  awards: [
    ["2025", "Management Science Distinguished Service Award — Reviewer"],
    ["2025", "Manufacturing & Service Operations Management Meritorious Service Award — Reviewer"],
    ["2024", "1st place, POMS College of Behavioral Operations Management Junior Scholar Paper Competition — awarded to coauthor Matt DiSorbo"],
    ["2023", "2nd place, INFORMS Behavioral Operations Management Best Working Paper Competition"],
    ["2023", "Finalist, INFORMS Service Science Best DEIJ Paper Competition"],
    ["2023", "1st place, POMS College of Behavioral Operations Management Junior Scholar Paper Competition"],
    ["2022", "Advances in Decision Analysis Conference Best PhD Blitz Presentation"]
  ],

  service: [
    ["2026–2027", "Track Chair, POMS Teaching/Pedagogy in POM"],
    ["2025–2026", "Member, JSOM Healthcare Hiring Committee"],
    ["2025", "Member, JSOM Mentorship Committee"],
    ["2025", "Speaker, JSOM AI Day — Smart Start: AI for Students"],
    ["2023", "Session organizer/chair, POMS Behavioral Operations Management track"],
    ["2020–2022", "Co-organizer, HBS Digital Doctoral Workshop Seminar Series"]
  ],

  invitedTalks: [
    ["2026", "University of Pennsylvania — Wharton Empirical OM PhD Seminar"],
    ["2026", "University of Texas at Dallas — JSOM Operations Department"],
    ["2025", "University of Toronto — Rotman Operations Department, Young Scholar Seminar Series"],
    ["2024", "University of Michigan Ross — Technology and Operations Department"],
    ["2024", "Emory University Goizueta — Information Systems and Operations Management"],
    ["2024", "Microsoft Research — Fairness, Accountability, Transparency & Ethics in AI (FATE) Group"]
  ],

  recentPresentations: [
    ["Jul 2026", "The Human in the Data Pipeline: Behavioral Biases in Training Data Set Curation for AI", "INFORMS M&SOM Conference, Boston"],
    ["Jul 2026", "Raising the Ceiling on What Students Can Learn with AI", "INFORMS M&SOM Conference — Teaching Innovations Session, Boston"],
    ["May 2026", "Teaching ‘I Know It When I See It’ to AI: Human–AI Collaboration for Transferring Tacit Decision Rules", "POMS Annual Conference, Reno"],
    ["May 2026", "The Human in the Data Pipeline: Behavioral Biases in Training Data Set Curation for AI", "Behavioral Operations Conference, Tempe"],
    ["Jan 2026", "Warnings and Endorsements: Improving Human–AI Collaboration in the Presence of Outliers", "Workshop in Management Science, Santa Cruz, Chile"]
  ],

  news: [
    ["2026-09", "Serving as Track Chair for the POMS Teaching/Pedagogy in POM track for the 2027 conference."],
    ["2026-07", "Presented two talks at the INFORMS M&SOM Conference in Boston, including a Teaching Innovations presentation on AI in the classroom."],
    ["2026-05", "Presented research at the POMS Annual Conference in Reno and the Behavioral Operations Conference at Arizona State University."],
    ["2026-01", "Presented Warnings and Endorsements at the Workshop in Management Science in Santa Cruz, Chile."],
    ["2025-12", "Received the 2025 Management Science Distinguished Service Award (Reviewer)."],
    ["2025", "Received the 2025 M&SOM Meritorious Service Award (Reviewer)."],
    ["2025-09", "Warnings and Endorsements published in Manufacturing & Service Operations Management."],
    ["2025-03", "Human-Algorithm Collaboration with Private Information published online in Management Science."],
    ["2025-03", "Differentiating on Diversity published in Production and Operations Management, 34(3)."],
    ["2023-10", "Improving Human-Algorithm Collaboration won second place in the INFORMS Behavioral Operations Management Best Working Paper Competition."],
    ["2023-10", "Differentiating on Diversity was accepted at Production and Operations Management."],
    ["2023-07", "Speedy Activists published in the Journal of Consumer Psychology."],
    ["2023-05", "Improving Human-Algorithm Collaboration won first place in the POMS College of Behavioral Operations Management Junior Scholar Paper Competition."],
    ["2022-06", "Won Best PhD Blitz Presentation at the Advances in Decision Analysis Conference."]
  ]
};
