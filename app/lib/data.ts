export const DISCOVERY_CALL_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2AyjX13siHZZnNI1-fIxOG5q6gWVXEpwd2kgQ_rytk9cjSUpWWgUy5GaKP2FlugO6p-2rlpXr5?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleASWTTdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafave154IWFfW1tcq4k4W4rQmpkPUDU7B5G8CZIyHKlpyecQuYKfOEYlBrrPA_aem_5vgb87ia1CYtU_qKCS9cJQ";
export const PHONE_NUMBER = "+1(940) 245-3164";
export const PHONE_HREF = "tel:+19402453164";
export const EMAIL = "info@finesseplans.com";
export const ADDRESS = "";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  body: string;
  bulletPoints: string[];
  closing: string;
  ctaText: string;
  ctaUrl: string;
  iconType: string;
}

export const services: Service[] = [
  {
    slug: "financial-security-income-protection",
    title: "Financial Security & Income Protection Planning for Families",
    shortDescription:
      "Helping families protect their income, maintain financial stability, and prepare for life's unexpected events.",
    intro:
      "Many families spend years building a life they love, purchasing a home, raising children, saving for the future, and creating opportunities for the people who matter most. Yet many families remain financially vulnerable because the income supporting those goals is not adequately protected.",
    body: "Financial security is beyond earning an income. It's about creating a plan that helps your family remain financially stable if life takes an unexpected turn.\n\nOur approach focuses on helping families understand potential risks, identify protection gaps, and implement strategies designed to safeguard their financial future. Whether your concern is replacing income, protecting your children's future, covering major financial obligations, or preserving your family's lifestyle, we help you explore solutions that align with your goals and circumstances.",
    bulletPoints: [
      "Life insurance strategies designed to help protect your loved ones financially",
      "Income protection planning to help maintain financial stability during difficult times",
      "Coverage reviews to determine whether existing policies still meet your family's needs",
      "Protection strategies that evolve as your family, responsibilities, and goals change",
    ],
    closing:
      "We believe financial protection should be based on a clear understanding of your family's needs and the future you are working to create.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "shield",
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection Planning for Families",
    shortDescription:
      "Helping homeowners create a strategy to protect their home and loved ones from financial disruption and the risk of foreclosure.",
    intro:
      "For many families, a home is more than a place to live, it is one of the largest financial commitments they will ever make. It represents stability, security, and the future they are building for the people they love.",
    body: "But what would happen to that home if the income supporting it suddenly stopped?\n\nMortgage protection planning helps families prepare for life's unexpected events by creating strategies designed to help protect their home and maintain financial stability. The goal is to help ensure that loved ones are not faced with difficult financial decisions during an already challenging time.\n\nOur approach begins with understanding your family's unique situation, including your mortgage obligations, income sources, financial goals, and existing protection plans. From there, we help identify options that align with your needs and long-term objectives.",
    bulletPoints: [
      "Reduce the financial burden of mortgage payments on surviving family members",
      "Protect your family's ability to remain in their home",
      "Provide financial support during unexpected life events",
      "Complement existing life insurance and financial protection strategies",
      "Create greater confidence that your family's housing needs can continue to be met",
    ],
    closing:
      "Mortgage protection is not just about protecting a property, it's about helping protect the people, memories, and future it represents.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "home",
  },
  {
    slug: "long-term-care-asset-protection",
    title: "Long-Term Care & Asset Protection Planning",
    shortDescription:
      "Helping individuals and families prepare for future care needs while preserving the assets they've worked hard to build.",
    intro:
      "As people live longer, the likelihood of needing some form of extended care increases. Whether that care is provided at home, in an assisted living community, or in a nursing facility, the associated costs can place significant financial pressure on individuals and their families.",
    body: "Long-term care planning helps you prepare for these possibilities before they become urgent decisions. The goal is to create a personalized strategy that helps protect your assets, preserve your independence, and reduce the financial and emotional burden that unexpected care needs can place on loved ones.\n\nOur approach begins with understanding your current financial situation, family dynamics, healthcare concerns, and long-term goals. We then help you evaluate available options and determine which strategies may be appropriate for your circumstances.",
    bulletPoints: [
      "Prepare for future healthcare and caregiving expenses",
      "Help preserve retirement savings and other assets",
      "Reduce the financial burden placed on family members",
      "Provide greater flexibility when care decisions need to be made",
      "Support your desire to maintain independence and dignity",
      "Create confidence that a plan is in place for life's later stages",
    ],
    closing:
      "By planning ahead, families can make informed decisions that balance protection, affordability, and long-term financial goals, giving them the choices, support, and peace of mind they need when it matters most.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "heart",
  },
  {
    slug: "legacy-building-wealth-transfer",
    title: "Legacy Building & Wealth Transfer Planning",
    shortDescription:
      "Helping families preserve, protect, and transfer wealth in a way that reflects their values and long-term goals.",
    intro:
      "Building wealth is only part of the journey. What is equally important is ensuring that what you've worked hard to build is protected, organized, and passed on according to your wishes.",
    body: "Legacy building and wealth transfer planning helps families prepare for the future by creating strategies that protect assets, provide clarity, and help ensure loved ones are cared for when the time comes. The goal is not simply to transfer wealth, but to transfer it in a way that supports your family's values, priorities, and long-term vision.\n\nOur approach begins with understanding your family, your assets, and the legacy you hope to leave behind. We help you evaluate existing plans, identify potential gaps, and explore strategies that can help simplify the transfer of wealth and reduce uncertainty for future generations.",
    bulletPoints: [
      "Protect and preserve family assets",
      "Create a clear plan for the distribution of wealth",
      "Help provide for children, grandchildren, and future generations",
      "Reduce confusion and potential family disputes",
      "Support charitable and legacy goals",
      "Help ensure your wishes are clearly documented and understood",
    ],
    closing:
      "A legacy is about the security, opportunities, values, and impact you leave for the people you love.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "star",
  },
  {
    slug: "retirement-income-planning",
    title: "Comprehensive Retirement Income Planning for Longer Lifespans",
    shortDescription:
      "Helping individuals and couples create retirement strategies designed to support income, lifestyle, and financial confidence throughout retirement.",
    intro:
      "Retirement today can last 20, 30, or even 40 years. We help individuals and couples create a retirement strategy designed to support their lifestyle, provide reliable income, and adapt to life's changing circumstances.",
    body: "By evaluating your savings, income sources, Social Security benefits, retirement goals, and future expenses, we help you build a plan that balances today's needs with tomorrow's opportunities. The result is greater confidence, clarity, and peace of mind as you prepare for the years ahead.",
    bulletPoints: [
      "Create a sustainable retirement income strategy",
      "Maximize Social Security and pension benefits",
      "Evaluate retirement savings and investment accounts",
      "Plan for healthcare and long-term care expenses",
      "Develop tax-efficient withdrawal strategies",
      "Adjust your plan as life circumstances and goals change",
    ],
    closing:
      "Comprehensive retirement planning helps you make informed decisions and prepare for a secure and fulfilling retirement.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "chart",
  },
  {
    slug: "financial-security-women",
    title: "Financial Security Planning for Women",
    shortDescription:
      "Helping mothers, single mothers, widows, and women in transition make informed financial decisions with confidence.",
    intro:
      "Women often face unique financial challenges throughout different stages of life. Whether you're raising children, managing a household, navigating a divorce, adjusting to the loss of a spouse, caring for loved ones, planning for retirement, or rebuilding after a major life change, having a clear financial strategy can make all the difference.",
    body: "Our Financial Security Planning for Women service is designed to help women gain clarity, confidence, and control over their financial future. We take the time to understand your personal circumstances, goals, responsibilities, and concerns so we can help you make informed decisions that support both your immediate needs and long-term aspirations.",
    bulletPoints: [
      "Protect your income and financial stability",
      "Understand available benefits and income sources",
      "Prepare for retirement with greater confidence",
      "Protect your children and loved ones",
      "Preserve assets and build long-term financial security",
      "Navigate major life transitions with a clear plan",
    ],
    closing:
      "Financial confidence is about having a plan that helps you move forward with clarity, independence, and peace of mind.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "woman",
  },
  {
    slug: "financial-protection-minors",
    title: "Financial Protection Planning for Minors",
    shortDescription:
      "Helping parents and guardians create financial safeguards and future opportunities for the children they care about.",
    intro:
      "Every parent and guardian wants to provide children with the best possible start in life. While many families focus on meeting today's needs, it's equally important to prepare for the future and protect the opportunities children may depend on tomorrow.",
    body: "Financial Protection Planning for Minors helps families create strategies designed to support children's well-being, financial security, and future goals. Whether the objective is protecting a child's future in the event of an unexpected life event, providing financial resources for important milestones, or ensuring assets are managed responsibly on their behalf, thoughtful planning can make a lasting difference.\n\nOur approach begins with understanding your family's goals, values, and priorities. We then help identify strategies that can provide protection, structure, and financial support for the children you care about most.",
    bulletPoints: [
      "Create financial protection for children in the event of an unexpected loss",
      "Help ensure funds are available for future needs and opportunities",
      "Establish plans for managing assets on behalf of minors",
      "Protect inheritances and other financial resources",
      "Provide clarity regarding guardianship and future financial responsibilities",
      "Support long-term family and legacy goals",
    ],
    closing:
      "Protecting your children is about helping them create opportunities, security, and support for the years ahead.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "child",
  },
  {
    slug: "trust-fund-special-needs-legacy",
    title: "Trust Fund Babies, Special Needs Children & Legacy Planning",
    shortDescription:
      "Helping families create trusts, protect inheritances, provide for children with special needs, and transfer wealth according to their wishes.",
    intro:
      "Helping families use trusts and estate planning strategies to protect assets, provide for loved ones, including those with special needs, and create a lasting legacy for future generations.",
    body: "Many families spend years building assets, creating opportunities, and planning for the future. Yet without proper planning, those assets may not be distributed, managed, or protected in the way they intended.\n\nTrust and legacy planning helps families create a framework for preserving wealth, protecting beneficiaries, and providing long-term financial support for future generations. This planning can be especially important for families who wish to provide for young children, grandchildren, individuals with special needs, or loved ones who may require ongoing financial oversight and support.\n\nOur approach begins with understanding your family structure, goals, concerns, and long-term vision. We then help you explore strategies that can help ensure your wishes are carried out while providing protection and flexibility for those you care about most.",
    bulletPoints: [
      "Protect assets for future generations",
      "Establish trusts to help manage and distribute wealth according to your wishes",
      "Provide financial support for children and grandchildren",
      "Create long-term planning solutions for loved ones with special needs",
      "Help preserve family wealth and opportunities",
      "Reduce uncertainty and potential family conflicts",
      "Support charitable and legacy goals",
    ],
    closing:
      "A legacy is measured by the security, opportunities, and care you provide for the people who matter most.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "trust",
  },
  {
    slug: "business-continuity-succession-legacy",
    title: "Business Continuity, Succession & Legacy Planning",
    shortDescription:
      "Helping business owners protect their company, prepare for leadership transitions, and preserve the wealth they've worked hard to build for future generations.",
    intro:
      "Building a successful business requires years of sacrifice, commitment, and hard work. Yet many business owners spend more time growing their business than planning for what happens if they retire, become disabled, pass away, or decide to transition ownership in the future.",
    body: "Business Continuity, Succession & Legacy Planning helps business owners prepare for the unexpected while creating a strategy for the future of their company, family, employees, and assets.\n\nOur approach begins with understanding your business structure, ownership goals, family priorities, and long-term vision. We then help identify planning opportunities designed to protect the business, preserve its value, and support a smooth transition when the time comes.",
    bulletPoints: [
      "Protect the business from financial disruption caused by unexpected life events",
      "Support business continuity during ownership or leadership transitions",
      "Help facilitate the transfer of ownership to family members, partners, or successors",
      "Preserve business value for future generations",
      "Protect key individuals whose contributions are essential to business operations",
      "Coordinate business succession goals with personal estate and legacy plans",
      "Create strategies for transferring wealth in a tax-efficient and organized manner",
      "Help ensure family members, employees, and stakeholders are considered in long-term planning decisions",
    ],
    closing:
      "A successful business is a legacy of hard work, opportunity, and impact. Proper planning helps ensure that legacy continues to benefit the people and causes that matter most to you.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "briefcase",
  },
  {
    slug: "employee-financial-protection-benefits",
    title: "Employee Financial Protection & Benefits Planning",
    shortDescription:
      "Helping employers provide meaningful financial protection and benefits that support employees and their families.",
    intro:
      "Employees are one of an organization's most valuable assets. Providing thoughtful financial protection and benefits not only helps support employees and their families, but can also contribute to a stronger, more engaged workforce.",
    body: "Employee Financial Protection & Benefits Planning helps businesses create benefit strategies that promote financial well-being while supporting the goals of both the organization and its employees. Whether you're a small business owner looking to introduce benefits for the first time or an established company reviewing existing offerings, a well-designed benefits strategy can make a meaningful difference.\n\nOur approach begins with understanding your business, workforce, and objectives. We work with employers to explore benefit options that align with company goals, employee needs, and budget considerations.",
    bulletPoints: [
      "Provide financial protection for employees and their families",
      "Enhance employee satisfaction and overall well-being",
      "Support employee recruitment and retention efforts",
      "Offer valuable benefits that complement compensation packages",
      "Strengthen workplace financial wellness initiatives",
      "Create benefit strategies that can evolve as your business grows",
    ],
    closing:
      "Investing in your employees is an investment in the people who help make your business successful.",
    ctaText: "See Your Options",
    ctaUrl: DISCOVERY_CALL_URL,
    iconType: "office",
  },
];

export interface Event {
  id: string;
  title: string;
  date: string;
  dateISO: string;
  time: string;
  location: string;
  description: string;
  registerUrl: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Family Financial Protection Workshop",
    date: "July 12, 2026",
    dateISO: "2026-07-12",
    time: "10:00 AM – 12:00 PM",
    location: "Virtual Webinar",
    description:
      "A hands-on workshop designed to help families understand the basics of income protection, life insurance, and building a financial safety net. Perfect for families at any stage of their financial journey.",
    registerUrl: DISCOVERY_CALL_URL,
  },
  {
    id: "2",
    title: "Retirement Readiness Seminar",
    date: "July 26, 2026",
    dateISO: "2026-07-26",
    time: "1:00 PM – 3:00 PM",
    location: "Virtual Webinar",
    description:
      "Explore strategies for creating reliable retirement income, maximizing Social Security benefits, and building a retirement plan that supports the lifestyle you've worked hard to achieve.",
    registerUrl: DISCOVERY_CALL_URL,
  },
  {
    id: "3",
    title: "Women & Wealth: A Financial Empowerment Event",
    date: "August 9, 2026",
    dateISO: "2026-08-09",
    time: "11:00 AM – 1:00 PM",
    location: "Virtual Webinar",
    description:
      "A special event for women navigating financial decisions at every stage of life. Topics include income protection, retirement planning, and building long-term financial confidence.",
    registerUrl: DISCOVERY_CALL_URL,
  },
  {
    id: "4",
    title: "Legacy Planning & Wealth Transfer Q&A",
    date: "August 23, 2026",
    dateISO: "2026-08-23",
    time: "2:00 PM – 3:30 PM",
    location: "Virtual Webinar",
    description:
      "A focused Q&A session on estate planning, trust strategies, and legacy planning. Bring your questions and learn how to protect and transfer your wealth according to your wishes.",
    registerUrl: DISCOVERY_CALL_URL,
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Why Every Family Needs an Income Protection Plan",
    summary:
      "Many families underestimate the financial risk of losing their primary income source. Learn why protection planning is essential and how to get started.",
    date: "June 1, 2026",
    readTime: "5 min read",
    category: "Income Protection",
    href: "/resources/blog",
    image: "/images/blog-income-protection.jpg",
  },
  {
    id: "2",
    title: "The 3 Pillars of Family Financial Security",
    summary:
      "Protecting your family's financial future requires more than a savings account. Explore the three essential pillars: Protect, Prepare, and Preserve.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Financial Planning",
    href: "/resources/blog",
    image: "/images/blog-financial-planning.jpg",
  },
  {
    id: "3",
    title: "Retirement Planning: Starting Early vs. Starting Now",
    summary:
      "Whether retirement is decades away or just around the corner, the best time to plan is today. Here's how to approach retirement at any stage of life.",
    date: "May 8, 2026",
    readTime: "7 min read",
    category: "Retirement",
    href: "/resources/blog",
    image: "/images/blog-retirement.jpg",
  },
];

export const videoItems = [
  {
    id: "1",
    title: "Understanding Family Protection Planning",
    description:
      "A comprehensive overview of how families can protect their income, assets, and loved ones from unexpected life events.",
    duration: "12 min",
    topic: "Family Protection",
    thumbnail: "/images/video-family-protection.jpg",
  },
  {
    id: "2",
    title: "Retirement Income Strategies",
    description:
      "Explore practical strategies for building a reliable retirement income that supports your lifestyle throughout your golden years.",
    duration: "18 min",
    topic: "Retirement Planning",
    thumbnail: "/images/video-retirement.jpg",
  },
  {
    id: "3",
    title: "Estate Planning Basics",
    description:
      "Demystifying estate planning — what it is, why it matters, and how to get started protecting your family's legacy.",
    duration: "15 min",
    topic: "Estate Planning",
    thumbnail: "/images/video-estate-planning.jpg",
  },
  {
    id: "4",
    title: "Long-Term Care: What You Need to Know",
    description:
      "An honest look at long-term care costs, planning strategies, and how to protect your assets while preserving your independence.",
    duration: "14 min",
    topic: "Long-Term Care",
    thumbnail: "/images/video-long-term-care.jpg",
  },
];

export const downloadableResources = [
  {
    id: "1",
    title: "Family Protection Gap Checklist",
    description:
      "Use this checklist to identify gaps in your family's financial protection strategy and determine where improvements may be needed.",
    type: "Checklist",
    available: true,
    fileUrl:
      "/logos/Finesse%20Plans%20Logo/Finesse_Plans_Family_Protection_Checklist.pdf",
  },
  {
    id: "2",
    title: "Retirement Income Planning Guide",
    description:
      "A step-by-step guide to understanding your retirement income sources, estimating expenses, and building a sustainable retirement plan.",
    type: "Guide",
    available: false,
    fileUrl: null,
  },
  {
    id: "3",
    title: "Life Insurance Needs Worksheet",
    description:
      "Calculate how much life insurance coverage your family may need based on your income, debts, and financial goals.",
    type: "Worksheet",
    available: false,
    fileUrl: null,
  },
  {
    id: "4",
    title: "Estate Planning Starter Template",
    description:
      "A practical template to help organize your estate planning documents, beneficiary designations, and legacy goals.",
    type: "Template",
    available: false,
    fileUrl: null,
  },
];
