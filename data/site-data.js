window.SITE_DATA = {
  profile: {
    name: "Maya Balakrishnan",
    title: "Assistant Professor of Operations Management",
    institution: "Naveen Jindal School of Management, The University of Texas at Dallas",
    email: "maya.balakrishnan@utdallas.edu",
    location: "Richardson, Texas",
    bio: `I am an Assistant Professor of Operations Management at the Naveen Jindal School of Management at The University of Texas at Dallas. My research examines how people and organizations interact with artificial intelligence and other operational systems, with a particular focus on human–AI collaboration, behavioral operations, and operational transparency.`,
    bio2: `My work combines controlled experiments, field and archival data, econometrics, machine learning, and computational methods. I received my PhD in Technology and Operations Management from Harvard Business School and my BS in Computer Science, with a specialization in Human-Computer Interaction, from Stanford University. Before graduate school, I worked at Microsoft and Goldman Sachs and co-founded a venture-backed software company for food manufacturers.`,
    bioTeaching: `I also care deeply about teaching. At UT Dallas, I designed from scratch and teach AI in Supply Chain Management, a course that uses generative AI to help students with no coding background move quickly from messy operational data to machine-learning models, optimization, and concrete business decisions—while still learning to evaluate AI outputs, understand the data and algorithms underneath them, and own the final recommendation.`,
    bioPersonal: `Outside of work, I enjoy collecting hobbies—recently pottery, salsa dancing, and piano—and spending time with my husband and son.`,
    links: [
      {label: "CV", href: "assets/Maya_Balakrishnan_CV.pdf"},
      {label: "UT Dallas", href: "https://jindal.utdallas.edu/faculty/maya-balakrishnan?_ga=2.202056593.1689893000.1789410710-1668145572.1723650263"},
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
      abstract: `Even if algorithms make better predictions than humans on average, humans may sometimes have private information that an algorithm does not have access to that can improve performance. How can we help humans effectively use and adjust recommendations made by algorithms in such situations? When deciding whether and how to override an algorithm’s recommendations, we hypothesize that people are biased toward following naïve advice-weighting (NAW) behavior; they take a weighted average between their own prediction and the algorithm’s prediction, with a constant weight across prediction instances regardless of whether they have valuable private information. This leads to humans overadhering to the algorithm’s predictions when their private information is valuable and underadhering when it is not. In an online experiment where participants were tasked with making demand predictions for 20 products while having access to an algorithm’s predictions, we confirm this bias toward NAW and find that it leads to a 20%–61% increase in prediction error. In a second experiment, we find that feature transparency—even when the underlying algorithm is a black box—helps users more effectively discriminate how to deviate from algorithms, resulting in a 25% reduction in prediction error. We make further improvements in a third experiment via an intervention designed to move users away from advice weighting and instead, use only their private information to inform deviations, leading to a 34% reduction in prediction error.`,
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
      abstract: `Generative AI tools have become routine at work, but the major models differ in how their developers position them to behave when user goals and model guardrails come into tension. Some models are framed as cautious, designed to decline requests that risk harm. Others are framed as open, prioritizing direct answers and minimal filtering. We examine whether workers respond to operating stance when choosing an AI and when using one they have been assigned. Across two preregistered, incentive-compatible online experiments (N = 1,344), workers treated operating stance as a task-relevant product attribute. When a workplace writing task emphasized caution and risk calibration, workers were substantially more likely to select a safety-stance assistant (Study 1). When assigned an assistant rather than allowed to choose, workers whose assistant’s stance matched the task reported a more positive interaction experience and were more willing to use the same assistant again. The match also shaped the firm’s customer-facing output: stance materially affected which internal accountability facts appeared in the email participants ultimately sent to customers (Study 2). The value of a model’s operating stance depends on the task it supports, both in which model workers select and in what the chosen model produces. These findings link operations decisions about AI deployment to marketing decisions about customer-facing brand voice.`
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
      {
        name:"AI in Supply Chain Management",
        detail:"I designed this course from scratch and teach both undergraduate and master’s versions at UT Dallas. The undergraduate course was built for business students with no coding, math, or data-science prerequisites; the students in the first offering had never written a line of code before the course.",
        detail2:"Generative AI lets us move past syntax and spend class time on the harder parts of AI-enabled decision making. By the end of the semester, students work from messy raw sales data through data cleaning and imputation, forecasting and machine-learning models, model interpretation and evaluation, and mixed-integer optimization—ultimately turning predictions into concrete operational recommendations.",
        highlights:[
          "Students learn to own four parts of an AI-enabled decision: evaluating AI outputs, examining the inputs and data-generating process, building intuition for how algorithms work, and owning the final operational decision.",
          "In class, we use whiteboards to build intuition for methods such as Thompson sampling, dynamic programming, shortest paths, neural networks, forecasting, and fairness metrics; students then use generative AI as a coding partner to implement those ideas.",
          "I built an original inventory-ordering simulation in which students create their own forecasting algorithms, receive information their AI cannot see, and learn when human judgment improves or harms the recommendation.",
          "The final project asks students to interrogate custom-GPT stakeholders in a fictional logistics setting, clean and model messy data, extract business constraints, formulate an optimization model, and defend a final inventory manifest to the client.",
          "The course design was featured in my M&SOM 2026 Teaching Innovations presentation, ‘Raising the Ceiling on What Students Can Learn with AI.’"
        ]
      },
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

  news: [
    ["2026-09", "Serving as Track Chair for the POMS Teaching/Pedagogy in POM track for the 2027 conference."],
    ["2026-07", "Presented ‘The Human in the Data Pipeline: Behavioral Biases in Training Data Set Curation for AI’ at the INFORMS M&SOM Conference in Boston."],
    ["2026-07", "Presented ‘Raising the Ceiling on What Students Can Learn with AI’ in the Teaching Innovations Session at the INFORMS M&SOM Conference in Boston."],
    ["2026-05", "Presented ‘Teaching ‘I Know It When I See It’ to AI: Human–AI Collaboration for Transferring Tacit Decision Rules’ at the POMS Annual Conference in Reno."],
    ["2026-05", "Presented ‘The Human in the Data Pipeline: Behavioral Biases in Training Data Set Curation for AI’ at the Behavioral Operations Conference in Tempe."],
    ["2026-01", "Presented ‘Warnings and Endorsements: Improving Human–AI Collaboration in the Presence of Outliers’ at the Workshop in Management Science in Santa Cruz, Chile."],
    ["2025-12", "Received the 2025 Management Science Distinguished Service Award (Reviewer)."],
    ["2025", "Received the 2025 M&SOM Meritorious Service Award (Reviewer)."],
    ["2025-09", "Warnings and Endorsements published in Manufacturing & Service Operations Management."],
    ["2025-03", "Human-Algorithm Collaboration with Private Information published online in Management Science."],
    ["2025-03", "Differentiating on Diversity published in Production and Operations Management, 34(3)."],
    ["2024-10", "Learning about Learning: Encouraging Algorithm Alignment through Progressive Deployment, with B. McLaughlin, presented at the INFORMS Annual Conference in Seattle."],
    ["2023-12", "Presented ‘Speedy Activists: Firm Response Time to Sociopolitical Events Influences Consumer Behavior’ at the Workshop in Management Science in San Pedro, Chile."],
    ["2023-11", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ at the Society for Judgment and Decision Making Annual Meeting in San Francisco."],
    ["2023-10", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ in the Humans and Machines with Applications in Operations session at the INFORMS Annual Conference in Phoenix."],
    ["2023-10", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ in the INFORMS Behavioral Operations Management Best Working Paper Competition finalist session."],
    ["2023-10", "Presented ‘Differentiating on Diversity: How Disclosing Workforce Diversity Influences Consumer Choice’ in the INFORMS Service Science DEIJ Award Session."],
    ["2023-10", "Improving Human-Algorithm Collaboration won second place in the INFORMS Behavioral Operations Management Best Working Paper Competition."],
    ["2023-10", "Differentiating on Diversity was accepted at Production and Operations Management."],
    ["2023-07", "Speedy Activists published in the Journal of Consumer Psychology."],
    ["2023-06", "Presented ‘Differentiating on Diversity: How Disclosing Workforce Diversity Influences Consumer Choice’ at the Conference in Operational Excellence in Retailing at Wharton."],
    ["2023-06", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ at the M&SOM Conference in Montreal."],
    ["2023-06", "Presented ‘Speedy Activists: Firm Response Time to Sociopolitical Events Influences Consumer Behavior’ at the Behavioral Operations Conference in Baltimore."],
    ["2023-05", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ at the POMS Annual Conference in Orlando."],
    ["2023-05", "Presented ‘Differentiating on Diversity: How Disclosing Workforce Diversity Improves Brand Attitudes’ at the POMS Annual Conference in Orlando."],
    ["2023-05", "Improving Human-Algorithm Collaboration won first place in the POMS College of Behavioral Operations Management Junior Scholar Paper Competition."],
    ["2023-03", "Differentiating on Diversity was presented at the Marketing Science Conference on Diversity, Equity, and Inclusion at SMU Cox (presenter: Jimin Nam)."],
    ["2023-03", "Presented ‘Speedy Activists: Firm Response Time to Sociopolitical Events Influences Consumer Behavior’ at the Society for Consumer Psychology in San Juan."],
    ["2023-03", "Differentiating on Diversity was presented at the Society for Consumer Psychology in San Juan (presenter: Jimin Nam)."],
    ["2023-01", "Presented ‘Improving Human-Algorithm Collaboration: Causes and Mitigation of Over- and Under-Adherence’ at the Workshop in Management Science in Puerto Varas, Chile."],
    ["2022-10", "Presented ‘Unlocking Algorithm Potential: Overcoming Naïve Advice Weighting with Feature Transparency’ at the INFORMS Annual Conference in Indianapolis."],
    ["2022-10", "Differentiating on Diversity was presented at the INFORMS Annual Conference in Indianapolis (presenter: Jimin Nam)."],
    ["2022-06", "Presented ‘Unlocking Algorithm Potential: Overcoming Naïve Advice Weighting with Feature Transparency’ at Advances in Decision Analysis at UVA Darden; won Best PhD Blitz Presentation."],
    ["2022-06", "Presented ‘Differentiating on Diversity: How Disclosing Workforce Diversity Improves Brand Attitudes’ at the Behavioral Operations Conference at the University of Arkansas."],
    ["2022-06", "Unlocking Algorithm Potential was presented at the Behavioral Operations Conference at the University of Arkansas (presenter: Jordan Tong)."],
    ["2022-04", "Presented ‘Unlocking Algorithm Potential: Overcoming Naïve Advice Weighting with Feature Transparency’ at the POMS Annual Conference (online)."],
    ["2021-10", "‘An Empirical Study of Time Allotment and Delays in E-Commerce Delivery’ was presented at the INFORMS Annual Conference in Anaheim (presenter: N. Epstein)."],
    ["2021-06", "Presented ‘Speedy Activists: Firm Response Time to Sociopolitical Events Influences Consumer Behavior’ at AMA Marketing and Public Policy (online), with Jimin Nam." ]
  ]};
