import Image from "next/image";
import { Star } from "lucide-react";
import { Hero } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";
import { getSiteImages } from "@/lib/site-images";

const REVIEWS = [
  {
    name: "Petet Vargas Mas",
    quote:
      "Luke, Ben & Grant were excellent! Professional, friendly service. They did an awesome job with the lights. Clean lines, even spacing, and the lights look great. Best part is I didn't have to do a damn thing! 5 Star service. A+",
  },
  {
    name: "Josh Usewicz",
    quote:
      "Brightside Turf (Brightside Holiday Lighting) did an outstanding job with our holiday lighting! The team was communicative, professional, and easy to work with from start to finish. They delivered high-quality work with great attention to detail, and the end result looks fantastic.",
  },
  {
    name: "Glen Tramp",
    quote:
      "Did a nice job with our aeration and came back to ensure we were satisfied. Took soil samples and met to discuss the results. Paying through a link was handy and the communication was top-notch.",
  },
  {
    name: "Doug Adams",
    quote:
      "Brightside Turf offers several services but I've only used them for aeration. Two friendly, clean-cut young men showed up and did a great job. Great communication and I was extremely satisfied.",
  },
  {
    name: "David Fry",
    quote:
      "Luke and team were phenomenal from start to finish. We booked far out and really appreciated the reminders—they kept us on track! Hopefully more services coming soon?!",
  },
  {
    name: "Nhung Nguyen",
    quote:
      "I would recommend Brightside to anyone in Omaha. They're a local company that does things right. When we noticed issues in our lawn they came back the next day to spot treat.",
  },
  {
    name: "Thomas Norway",
    quote:
      "Very quick and great communication. They arrived on time for the aeration and just sent the invoice—could not have been easier. Definitely looking forward to working with them next season.",
  },
  {
    name: "Marlene Riva",
    quote:
      "They did a very good aeration job at my house. Communication was great and even though they were running late, they kept me informed. I'll definitely use them again next year!",
  },
  {
    name: "When In AZ",
    quote:
      "Brightside Turf handled aeration, overseeding, and fertilization for us. Fair pricing, easy to work with, and I could text to set everything up. Super happy to have found them.",
  },
  {
    name: "Duy Tran",
    quote:
      "Excellent job aerating my lawn. New company but they did everything exceptionally. Email/text reminders were great, pricing was unbeatable, and they even picked up markers and left a thank you gift.",
  },
  {
    name: "Sally S",
    quote:
      "The crew arrived on time, even on a weekend. They worked quickly, cleaned up afterward, and I was very happy with the aeration and overseeding they did.",
  },
  {
    name: "Jill Eli",
    quote:
      "Brightside is amazing! They just aerated and overseeded my yard. Everyone was professional, prompt, and gracious—can't wait to see it next spring!",
  },
  {
    name: "Anthony Podany",
    quote:
      "Hired Brightside to handle fall aeration and was very impressed with the work and communication. Price was good and they've followed up twice to make sure I'm satisfied. Highly recommend.",
  },
  {
    name: "Lance B",
    quote:
      "Service was amazing, quick response time and followed up to ensure quality. Would recommend for fertilizer needs.",
  },
  {
    name: "Lori H",
    quote:
      "Thrilled with our Christmas Lights! From the start to completion Brightside Turf was attentive, prompt, and professional, and the lights are super bright and high quality. They bring me so much holiday joy/cheer. Brightside Turf has been super good about sending emails and texts with updates on arrival; it has definitely made the process stress-free! I highly recommend giving them a try. When they came out they wore Santa hats too, which was a festive concept. Thanks Again!",
  },
  {
    name: "Krista P",
    quote:
      "Brightside Holiday Lighting brought my vision to life! The whole process, from design meeting to installation, was smooth and efficient! Would highly recommend these guys to make your holiday brighter!",
  },
  {
    name: "Jeff S",
    quote:
      "I clicked the link in a Facebook reel for their aeration service that was reasonably priced. Filled out the short form and was sent a text that my request was received.",
  },
  {
    name: "Jayakrishna A",
    quote:
      "We are very happy with BRIGHTSIDE Holiday Lighting for the lighting they installed for our house. We got the discounted price for the first time installation. They did a great job.",
  },
  {
    name: "Miranda S",
    quote:
      "These guys were the greatest! I love my lights. Luke & Ben were incredibly easy to work with. They also respond to any challenges.",
  },
  {
    name: "Kelsie K",
    quote:
      "Luke and the Brightside team were amazing throughout our Christmas light installation. Their communication was clear and timely, making the entire experience easy and enjoyable.",
  },
  {
    name: "Bella H",
    quote:
      "They did an awesome job with our Christmas lights! The team was quick, professional, and made our house look great for the holidays. Super easy to work with and totally worth it. Highly recommend!",
  },
  {
    name: "Krista W",
    quote:
      "We used Brightside for both our windows and Christmas lights this year and were super impressed! Everyone from the salesmen to the technicians have been super friendly, responsive and timely. Excellent customer service, excellent quality.",
  },
  {
    name: "Kristina C",
    quote:
      "Beautiful Festive Christmas Lights!!! The crew has been so professional and respectful throughout the entire process from start to end of this project! Very happy customer!",
  },
  {
    name: "Fen",
    quote:
      "Luke from Brightside Turf was great! Not pushy with sales. Great communicator as well! And communicated via text for me which is huge because that works best for me! The team showed up on time and aerated my lawn and I have zero issues!",
  },
  {
    name: "Alesia M",
    quote:
      "Everyone I dealt with at Brightside was amazing! Luke was professional and courteous. Ben and his teammate did a great job of hanging my Christmas lights right away. They look so beautiful! Great job!",
  },
  {
    name: "Jennie B",
    quote:
      "The guys arrived in the morning and were quick and efficient. It only took them a couple of hours to hang the front face lights and we have high roof lines. They did the pattern of lights and colors we requested and we are very pleased.",
  },
  {
    name: "Jared B",
    quote:
      "Luke and the Brightside team were incredibly helpful and professional throughout the entire process of installing our Christmas lights. Their communication was excellent, and they made everything easy and stress-free. Highly recommend!",
  },
  {
    name: "Julie J",
    quote:
      "We were very pleased with our service from Brightside! Great communication and prompt scheduling for our aeration and overseeding. Crew came out and were very thorough, even went above and beyond by removing all our sprinkler flags!",
  },
  {
    name: "Alejandro R",
    quote:
      "Super great group of guys, they were very easy to work with and very reliable, would definitely recommend! They left our house looking great and ready for the holidays!",
  },
  {
    name: "Sally C",
    quote:
      "We had Brightside aerate our lawn and they went over it several times, picked up all the sprinkler flags, and were very professional. Great price, too! Highly recommend!",
  },
  {
    name: "Jadie G",
    quote:
      "This year I chose to use Luke and his team at Brightside Turf to aerate my yard. It was a great experience. They communicated well and kept me updated on the schedule and when they would be onsite to perform the aeration.",
  },
  {
    name: "John R",
    quote:
      "I am very satisfied with the aerating and over-seeding Brightside did for my yard. I will not hesitate to give them a call next year when I need my yard aerated again. Thank you Brightside.",
  },
  {
    name: "Tom S",
    quote:
      "First time I used them and was impressed. Great communication, professional appearances. No hard sell, soil sample test unique and a great idea. Best customer service in the industry.",
  },
  {
    name: "Teresa P",
    quote:
      "This was our first time working with Brightside Turf. The pre service communication was great and everyone showed up as scheduled. We appreciate the professionalism and will be working with them in the future.",
  },
  {
    name: "Alanna L",
    quote:
      "These guys did an awesome job for us! We had them aerate our lawn and they were incredibly thorough. They even spent an extra half hour marking off my sprinkler heads when I forgot to. We have a whole half acre but the fee was super cheap.",
  },
  {
    name: "Casey H",
    quote:
      "The guys were great. Clearly communicated when they were going to show up and what to expect. Aerated the entire yard thoroughly and even picked up the sprinkler flags when finished. Would certainly recommend.",
  },
  {
    name: "Zach L",
    quote:
      "I had these come by and leave a note on my door offering some really great value aeration services which was perfect, I was looking for someone to do that anyways and it was CHEAP. They did a great job.",
  },
  {
    name: "Spencer L",
    quote:
      "Absolutely wonderful experience with this team. Great communication and prompt with their scheduling. Provided a welcome bag with some goodies after the service and performed a follow up detailing potential next steps if I was interested.",
  },
  {
    name: "Emily N",
    quote:
      "Lawn's never looked better since we started with these guys. Super easy to work with, really professional, and they actually care about the little details most companies overlook. Always on time, clean, and consistent. You won't regret going with them!",
  },
  {
    name: "Mansoor M",
    quote:
      "Completely satisfied with their holiday lighting installation at our place. Their team is highly professional, efficient and knowledgeable, would highly recommend them for holiday lighting work.",
  },
  {
    name: "Angelo C",
    quote:
      "Brightside Turf staff were efficient, courteous, and professional. We appreciate their hard work and honesty so much so that we will be utilizing their services moving forward. Great service and highly recommended.",
  },
  {
    name: "Christopher B",
    quote:
      "Ten out of 10 would recommend. They aerated and overseeded my yard this fall. Courteous, professional, easy to work with. They listened to what we wanted and did exactly what they said they would do.",
  },
  {
    name: "Angela B",
    quote:
      "They came and aerated my lawn. They had great communication up to the service and kept me in the loop the entire time. It was all for a great price and they even left me a thank you bag post service. Would for sure hire again!",
  },
  {
    name: "Patrick T",
    quote:
      "Brightside Turf did a fantastic job. Great attention to detail and very personable. Will definitely use their lawn service in future.",
  },
  {
    name: "Jason T",
    quote:
      "Great price, timely and easy to schedule, they made service easy by sending reminders and letting me know what I was expected to do. Friendly people working for them as well!",
  },
  {
    name: "John S",
    quote:
      "I had BRIGHTSIDE aerate my lawn. They were on time, sent reminders, soil tested my lawn (FREE), followed up by text AND sent Luke out personally to ask if I was pleased and if had any questions or concerns. I'd say that's next level customer service. I would definitely recommend them!",
  },
  {
    name: "Grant M",
    quote:
      "These guys are honest, efficient pros. No BS—they show up on time and finish fast. I've never had a lawn care company actually do that before.",
  },
  {
    name: "Joey F",
    quote:
      "The fertilizer job was top notch my lawn is greener, thicker, and healthier than ever. The work was done on time with great attention to detail. I'm seriously impressed and would recommend this service to anyone who wants real results.",
  },
  {
    name: "Stacey A",
    quote:
      "Great crew! Friendly and quick at what they do!! Also very knowledgeable. We will continue to use Brightside Turf for our lawn care needs.",
  },
  {
    name: "James K",
    quote:
      "Showed up on time as advertised. Aerated the yard being respectful of landscaping etc. Showed up one week later to confirm soil samples and schedule future appointments. Well done.",
  },
  {
    name: "Chris W",
    quote:
      "I had Brightside do my aeration and overseeding this year. Above and beyond customer service and communication which is greatly appreciated. Definitely not your typical yard company!",
  },
  {
    name: "Lisa B",
    quote:
      "Brightside turf was amazing to work with. They were kind efficient and great with communication. They came in a group and had the yard done quickly.",
  },
  {
    name: "John H",
    quote:
      "Great service from initial contact to follow up. Let me know what was going to happen and when, then followed through. I can't wait to see the improvement in my lawn next spring.",
  },
  {
    name: "Steven C",
    quote:
      "We went with Brightside Turf for our aeration and over-seeding this fall. The communication was excellent prior to arriving and after they completed the job they came back to see if we had any concerns and to make sure we are happy. They did an excellent job and take great pride in doing the service part of the service they provide. I would highly recommend working with them if you are looking for options.",
  },
  {
    name: "Zahid F",
    quote:
      "Would definitely recommend! Great service all around and phenomenal communication. Made everything super smooth and it was an incredible job.",
  },
  {
    name: "Bluejay",
    quote:
      "These guys are professional, punctual, and make my lawn look better than ever. You can tell they take pride in their work — everything is neat, clean, and done right the first time. If you want your yard to stand out, go with Brightside Turf. Highly recommend!",
  },
  {
    name: "Ty H",
    quote:
      "Super personable, cost effective and on time! What more could you ask for!!!",
  },
  {
    name: "Joanie N",
    quote:
      "Brightside Turf has done a great job of taking care of our lawn! It looks better than it ever has! They're on time, courteous, and professional. It's been really nice having a service that we can count on!",
  },
  {
    name: "Grant B",
    quote:
      "Called these young men out to give them a shot and they did not disappoint. From the customer service, to the work provided, these men do absolutely wonderful work and made sure I was satisfied with the work provided. HIGHLY recommend.",
  },
  {
    name: "Kristen D",
    quote:
      "The crew was fast and efficient. They did a great job and would highly recommend them as a hire.",
  },
  {
    name: "Rachel B",
    quote:
      "Brightside turf did a great job aerating and over-seeding our yard. Our lawn looks healthier already! Would highly recommend to anyone and will be using them for our future lawn care needs!",
  },
  {
    name: "Jake L",
    quote:
      "Excellent customer service and very easy to schedule and work with. Has good crews that do great work and take pride in what they do.",
  },
  {
    name: "Trevor L",
    quote:
      "Met one of the owners today, Luke. Very professional and a joy to work with. Full of wisdom.",
  },
  {
    name: "Ben S",
    quote:
      "Great experience with these fellas, competitive price and they got out to my house to complete the job within 24 hours.",
  },
  {
    name: "Joe H",
    quote:
      "They did great job on the work and were very professional. Great customer service.",
  },
  {
    name: "Courtney S",
    quote:
      "Highly recommend Brightside Turf! Their whole team is so kind and they are very reasonably priced!",
  },
  {
    name: "Joe M",
    quote:
      "Brightside Turf did an amazing job on my yard, they even picked up all the flags when the job was completed.",
  },
  {
    name: "Jeff P",
    quote:
      "Very professional company! Communicated great and did a fantastic job.",
  },
  {
    name: "Anthony A",
    quote:
      "Would recommend again. Courteous, professional, excellent communication, follow through and an overall great client experience.",
  },
  {
    name: "Nikki G",
    quote:
      "Very friendly! On time, great customer service and nice follow through. Thank you!",
  },
  {
    name: "Grant H",
    quote:
      "I enjoyed talking to the contractor and he was very nice and knowledgeable! Highly recommended.",
  },
  {
    name: "Alec H",
    quote:
      "We used Brightside to aerate my lawn and they were absolutely amazing! They even hit a few spots with seed.",
  },
  {
    name: "Randy B",
    quote:
      "Nice guys.",
  },
  {
    name: "Michael E",
    quote:
      "Awesome.",
  },
  {
    name: "Scott C",
    quote:
      "Prompt, professionally done.",
  },
  {
    name: "Amanda G",
    quote:
      "Great service.",
  },
  {
    name: "Ed L",
    quote:
      "Excellent service, accommodated my schedule. Was happy to call them back to over seed! A definite recommendation!",
  },
  {
    name: "Sam P",
    quote:
      "These guys rock! Having worked with them previously, would recommend to others! Quality service and quality people!",
  },
  {
    name: "Jenna",
    quote:
      "Were able to schedule us quickly. Addressed our concerns and did a very good job.",
  },
  {
    name: "Nathan F",
    quote:
      "Prompt service and great customer service. I appreciated the communication every step in our lawn care.",
  },
  {
    name: "Nicholas P",
    quote:
      "Excellent service. Great communication and follow up.",
  },
  {
    name: "Jackson W",
    quote:
      "Top tier work, great company I would recommend.",
  },
  {
    name: "Faustina J",
    quote:
      "Did a great job! Totally recommend!",
  },
  {
    name: "Leon",
    quote:
      "Aeration at a great price. Good service and follow up!",
  },
  {
    name: "Jennifer A",
    quote:
      "They were quick and great with communication.",
  },
  {
    name: "John D",
    quote:
      "Ben was great! Prompt and quick with his responses.",
  },
  {
    name: "Dean G",
    quote:
      "The lights look amazing! Super great communicators!!!!",
  },
  {
    name: "Jon S",
    quote:
      "Excellent services and look forward to supporting in the future.",
  },
  {
    name: "Tammy R",
    quote:
      "Great customer service. Timely and courteous!",
  },
  {
    name: "Amy H",
    quote:
      "Luke was so great, very personable and professional!!!",
  },
  {
    name: "Patrick O",
    quote:
      "Prompt service, very friendly.",
  },
  {
    name: "Nick",
    quote:
      "My lawn has never looked better! Thank you guys!",
  },
  {
    name: "Thomas L",
    quote:
      "These folks are really good at their craft.",
  },
  {
    name: "Finnian S",
    quote:
      "Great experience and super quick.",
  },
  {
    name: "Henry S",
    quote:
      "Great service, very professional.",
  },
  {
    name: "Gary J",
    quote:
      "Friendly, thorough and reasonable.",
  },
  {
    name: "Richard W",
    quote:
      "Great job very thorough job.",
  },
  {
    name: "Kyle F",
    quote:
      "Great service and communication!",
  },
  {
    name: "Gretchen H",
    quote:
      "Called and they came out the next day to aerate my yard. They did an amazing job!",
  },
  {
    name: "Greg P",
    quote:
      "Excellent customer service and great results. Glad to have found this company.",
  },
  {
    name: "Nichole K",
    quote:
      "Amazing service! Amazing owner! Very reliable and follows through.",
  },
  {
    name: "John M",
    quote:
      "We started with Brightside this fall and our lawn is looking great! Looking forward to the spring!",
  },
  {
    name: "Dylan L",
    quote:
      "Amazing service. Christmas lights look spectacular.",
  },
  {
    name: "Nic O",
    quote:
      "Great prompt, reasonable, courteous service! Highly recommended.",
  },
  {
    name: "Bryant G",
    quote:
      "Did a great job! Friendly, easy to work with and good communication!",
  },
  {
    name: "Leah F",
    quote:
      "Really good customer service, I'd highly recommend to anyone looking for a professional company that does things the way you want.",
  },
  {
    name: "Troy Y",
    quote:
      "Quality company that does quality work!!! Customer service is awesome!!! Highly recommend these guys!!!",
  },
  {
    name: "Joanne P",
    quote:
      "Easy to make an appointment showed up on time great experience!",
  },
  {
    name: "Rameer",
    quote:
      "What a great service!!! Had much help through their knowledge and their friendliness.",
  },
  {
    name: "Sofia H",
    quote:
      "Really great service! Staff were super helpful and on time. I highly recommend choosing them!",
  },
  {
    name: "Christian B",
    quote:
      "They did a great job. Really recommend them.",
  },
  {
    name: "Richard S",
    quote:
      "I highly recommend using Brightside Turf. The guys are very professional and knowledgeable about what they do and the services they provide.",
  },
  {
    name: "Dylan G",
    quote:
      "Excellent job. Great guys too. Very polite.",
  },
  {
    name: "Jason H",
    quote:
      "Did my holiday lighting this winter! Such a great company. Highly recommend.",
  },
];

const formatReviewerName = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  const initial = last[0]?.toUpperCase() ?? "";
  return `${parts[0]} ${initial}.`;
};

export default function ReviewsPage() {
  const siteImages = getSiteImages();

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="What Our Customers Say"
        subheading="Over 150 five-star reviews from homeowners across Omaha."
        statLabel="5.0 stars on Google"
        primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        compact
        backgroundImage={siteImages.heroBackgrounds.reviews}
      />

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-16 sm:px-6 lg:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-pine text-xl font-semibold text-white">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-medium text-slate-900">
                      {formatReviewerName(review.name)}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="size-5 text-[#FABB05]"
                          fill="#FABB05"
                        />
                      ))}
                    </div>
                  </div>
                  <Image
                    src="/icons8-google-48.png"
                    alt="Google"
                    width={32}
                    height={32}
                    className="ml-auto shrink-0"
                  />
                </div>
                <p className="flex-1 text-base leading-relaxed text-slate-600">
                  {review.quote}
                </p>
              </article>
            ))}
          </div>
        </div>

        <SiteFooter
          links={[
            ...NAV_LINKS,
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Get Quote", href: "/get-quote" },
          ]}
        />
      </div>
    </div>
  );
}
