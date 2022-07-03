import React from "react";
import GSectionTitle from "../../../Components/GSectionTitle";
import GAccordion from "../../../Components/GComponents/GAccordion/GAccordion";

const ProviderFaq = () => {
  return (
    <>
      <section className="pt60 pb60">
        <GSectionTitle title="Frequently Asked Questions" align="center">
        <GAccordion
          data={[
            {
              title: "What is Zaaruu? ",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            },
            {
              title: "How trustworthy is Zaaruu?",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
            },
            {
              title: "Why should I register?",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
            },
            {
              title:
                "I didn't receive a confirmation e-mail, what should I do?", 
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
            },
          ]}
        />
        </GSectionTitle>
      </section>
    </>
  );
};

export default ProviderFaq;
