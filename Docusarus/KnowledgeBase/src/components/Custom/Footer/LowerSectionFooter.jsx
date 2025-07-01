function LowerSectionFooter() {
    const copyRightText = [
        {
            id: 1,
            text: "Copyright © 2025 Text, Inc. All rights reserved.",
        },
        {
            id: 2,
            text: "We use cookies and similar technologies to enhance your interactions with our website and Services, including when you reach out to us on chat. This comprises traffic analysis, delivering personalized content, and supporting our marketing efforts. By accessing our website, interacting with our Services, you agree to let us and our partners employ cookies and similar technologies on your computer or devices. Click the Cookies Policy to check how you can control the use of them through your device. To understand how we process your data, including through cookies, and different forms of interactions with us, please read our Privacy Policy."
        }
    ]
    return <div className="w-[90%] mx-auto pt-[24px]">
        {copyRightText.map((text)=>{
            return <p key={text.id} className="!m-0 text-[12px] pb-[24px] font-light text-[#ABABB0]">{text.text}</p>
        })}
    </div>
}
export default LowerSectionFooter;