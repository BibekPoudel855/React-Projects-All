import FAQ from "./FAQ";
function FAQBody() {
  const faqData = [
    {
      id: 1,
      question: "What is a Knowledge Base?",
      answer: [
        {
          id: 1,
          text: "A knowledge base is a centralized and structured repository of information and data that serves as a source of knowledge within an organization and outside of it.",
        },
        {
          id: 2,
          text: "When it comes to internal use, a knowledge base can store different types of information: internal policies, updates, onboarding materials, strategies, summaries, company values, Standard Operating Procedures, and more.",
        },
        {
          id: 3,
          text: "On the outside, a knowledge base can also supplement customer support. A self service customer knowledge base is available 24/7 and can contain answers to common questions or information about a product, service, or a particular topic.",
        },
      ],
    },
    {
      id: 2,
      question: "How to create a knowledge base?",
      answer: [
        {
          id: 0,
          text: "To create a knowledge base, follow these steps:"
        },
        {
          id: 1,
          text: "  1. Choose the platform: Select a suitable platform or knowledge base software to host and manage your content.",
        },
        {
          id: 2,
          text: "  2. Identify the purpose and scope: Determine the main topics and categories to cover in your knowledge base.",
        },
        {
          id: 3,
          text: "  3. Gather relevant information: Collect existing documentation, FAQs, and other resources to include.",
        },
        {
          id: 4,
          text: "  4. Organize the content: Create a logical structure with categories and subcategories.",
        },
        {
          id: 5,
          text: "  5. Write and format the articles: Use a consistent, user-friendly writing style and include visual aids.",
        },
        {
          id: 6,
          text: "  6. Test and iterate: Launch with a small group, gather feedback, and improve continuously.",
        },
      ],
    },
    {
      id: 3,
      question: "What is knowledge base article?",
      answer: [
        {
          id: 1,
          text: "A knowledge base article is a standalone piece of content that addresses a specific topic, question, or problem. It should provide clear information, step-by-step instructions, or solutions to help users resolve issues independently.",
        },
      ],
    },
    {
      id: 4,
      question : "How to write a knowledge base article?",
      answer: [
        {
          id: 1,
          text: "A knowledge base article is a standalone piece of content in a knowledge base. The article addresses a specific topic, question, or problem. It provides in-depth information, step-by-step instructions, troubleshooting tips, or solutions to help users resolve their issues independently.",
        },
      ],
    },
    {
      id: 5,
      question: "How to create a knowledge base for employees?",
      answer: [
        {
          id : 0,
          text : "To create a knowledge base, follow these steps:"
        },
        {
          id: 1,
          text: "  1. Use workspaces for internal use if supported by your platform.",
        },
        {
          id: 2,
          text: "  2. Identify key topics that employees need for their roles.",
        },
        {
          id: 3,
          text: "  3. Include essential company policies, procedures, and guidelines.",
        },
        {
          id: 4,
          text: "  4. Organize content into categories like HR, IT, product info, etc.",
        },
        {
          id: 5,
          text: "  5. Ensure the knowledge base is easily searchable and accessible.",
        },
        {
          id: 6,
          text: "  6. Encourage feedback and contributions from employees to keep it relevant.",
        },
      ],
    },
    {
      id: 6,
      question: "What is a customer service knowledge base?",
      answer: [
        {
          id: 1,
          text: "A customer service knowledge base is a repository of support-related articles and guides designed to help customers resolve issues without contacting support.",
        },
        {
          id: 2,
          text: "It typically includes FAQs, troubleshooting tips, and usage guides, available 24/7 even when support agents are offline.",
        },
      ],
    },
    {
      id: 7,
      question: "What is knowledge base software?",
      answer: [
        {
          id: 1,
          text: "Knowledge base software is a tool that helps you create, organize, and manage a knowledge base. It includes features like editing, search, analytics, and feedback.",
        },
      ],
    },
    {
      id: 8,
      question: "What is knowledge base management?",
      answer: [
        {
          id: 1,
          text: "Knowledge base management is the ongoing process of maintaining and updating knowledge base content.",
        },
        {
          id: 2,
          text: "It involves reviewing, editing, and adding articles to keep information accurate, useful, and up to date.",
        },
      ],
    },
    {
      id: 9,
      question: "What makes a good knowledge base?",
      answer: [
        {id : 0, text : "A good knowledge base is characterized by:"},
        { id: 1, text: "  1. Clear and user-friendly navigation." },
        { id: 2, text: "  2. Well-organized categories and tags." },
        { id: 3, text: "  3. Effective and relevant search results." },
        { id: 4, text: "  4. Concise, helpful, and accurate articles." },
        { id: 5, text: "  5. Regular updates to ensure content is current." },
        {
          id: 6,
          text: "  6. Visual elements like images or videos to aid understanding.",
        },
        { id: 7, text: "  7. User feedback integration and ongoing improvements." },
        { id: 8, text: "  8. Accessible across devices and platforms." },
      ],
    },
    {
      id: 10,
      question: "Is a knowledge base expensive?",
      answer: [
        { id: 1, text: "It depends on the platform and features you choose." },
        {
          id: 2,
          text: "  1. Free and open-source tools exist, but paid platforms offer advanced capabilities.",
        },
        {
          id: 3,
          text: "  2. Custom solutions with unique designs or integrations cost more.",
        },
        {
          id: 4,
          text: "  3. Maintenance and content updates can add recurring expenses.",
        },
        {
          id: 5,
          text: "  4. Costs may include hosting, infrastructure, and licensing fees.",
        },
        {
          id: 6,
          text: " 5. Some platforms charge per user, per article, or by usage volume.",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-wrap items-start gap-3 mb-[46px]">

      {faqData.map((data)=>{
        return(
          <FAQ
          key={data.id}
          question={data.question}
          answers={data.answer}
          />
        )
      })}
    </div>
  );
}
export default FAQBody;
