function FooterLinks() {
  const footerLinks = [
    {
      id: 1,
      title: "ONLINE Services",
      links: [
        { id: 1, name: "Men", url: "#" },
        { id: 2, name: "Women", url: "#" },
        { id: 3, name: "Kids", url: "#" },
        { id: 4, name: "Home & Living", url: "#" },
        { id: 5, name: "Beauty", url: "#" },
        { id: 6, name: "Gift Card", url: "#" },
      ],
    },
    {
      id: 2,
      title: "CUSTOMER SERVICES",
      links: [
        { id: 1, name: "Contact Us", url: "#" },
        { id: 2, name: "FAQ", url: "#" },
        { id: 3, name: "Shipping", url: "#" },
        { id: 4, name: "Cancellation & Returns", url: "#" },
        { id: 5, name: "Privacy Policy", url: "#" },
        { id: 6, name: "Terms of Use", url: "#" },
      ],
    },
    {
      id: 3,
      title: "ABOUT US",
      links: [
        { id: 1, name: "Careers", url: "#" },
        { id: 2, name: "Corporate Information", url: "#" },
        { id: 3, name: "Customer Cares", url: "#" },
        { id: 4, name: "Sitemap", url: "#" },
      ],
    },
  ];

  return (
    <div className="flex md:justify-evenly flex-wrap gap-14 lg:gap-0 py-10">
      {footerLinks.map((column) => {
        return <div key={column.id}>
            <h3 className="font-bold mb-3">{column.title}</h3>
            <ul>
                {column.links.map((link) => {
                    return <li key={link.id} className="text-[#696B79] transition-all hover:underline hover:text-[#3e3f52]">{link.name}</li>;
                })}
            </ul>
        </div>;
      })}
    </div>
  );
}

export default FooterLinks;
