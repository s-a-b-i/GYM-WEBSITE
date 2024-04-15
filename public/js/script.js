function logoutAndReturnToLoginForm() {
    window.location.href = '/login';
  }
  

function toggleNavMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
}


function handleShopButtonClick(productName, price) {
  alert(`You clicked 'Shop' for ${productName} at $${price}`);
  // You can add more functionality here, such as navigating to the product page.
}


// testimonail dynamic data

const testimonialsData = [
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 1",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.he trainers are motivating, and the workout programs are effective. I've seen significant improvements in my strength and endurance. The cleanliness and hygiene standards are also commendable.",
      author: "John Doe 2",
      image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 3",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 4",
      image: "https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 5",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.",
      author: "John Doe 6",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 7",
      image: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 8",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 9",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
      text: "I love this gym! The facilities are top-notch, and the staff is always friendly and helpful. It's a great place to work out and stay fit. The variety of classes they offer keeps things interesting, and the equipment is well-maintained.The gym has a good mix of cardio and strength training equipment. The cleanliness is noticeable, and I feel comfortable using the facilities. The variety of classes and the option to work with personal trainers make it a versatile fitness center.",
      author: "John Doe 10",
      image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];


let currentTestimonial = 0; // Start from the first testimonial

function generateTestimonials() {
    const testimonialSection = document.getElementById("testimonialSection");

    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");

        testimonialCard.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="Person Image ${index + 1}">
            </div>
            <div class="testimonial-content">
                <p class="testimonial-text">${testimonial.text}</p>
                <p class="testimonial-author">- ${testimonial.author}</p>
            </div>
        `;

        testimonialSection.appendChild(testimonialCard);
    });
}

function showTestimonial(n) {
    const testimonials = document.getElementsByClassName('testimonial-card');
    
    // Hide all testimonials
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }

    // Ensure circular looping of testimonials
    currentTestimonial = (n + testimonials.length) % testimonials.length;

    // Show the current testimonial
    testimonials[currentTestimonial].style.display = 'flex';
}

function changeTestimonial(n) {
    showTestimonial(currentTestimonial += n);
}

// Call the function to generate testimonials and display the initial one
generateTestimonials();
showTestimonial(currentTestimonial);









// FAQS dynamic data........................................................

// FAQ data array
const faqData = [
    {
        question: 'What are the gym\'s operating hours?',
        answer: 'Our gym is open from 6:00 AM to 10:00 PM, Monday to Saturday, and from 8:00 AM to 8:00 PM on Sundays.'
    },
    {
        question: 'How can I cancel my membership?',
        answer: 'To cancel your membership, please visit the front desk or contact our customer support. Note that cancellation policies may apply.'
    },
    {
        question: 'Are personal trainers available?',
        answer: 'Yes, we offer personal training services. You can inquire at the front desk to schedule sessions with one of our certified trainers.'
    },
    {
        question: 'Do you provide locker facilities?',
        answer: 'Yes, we have locker rooms available for all members. You can use them to store your belongings while you work out.'
    },
    {
        question: 'Is there parking available?',
        answer: 'Yes, we have ample parking space for our members. It is free of charge during your gym visit.'
    }
];


function generateFAQItems() {
    const faqList = document.getElementById('faqList');

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.setAttribute('onclick', `toggleAnswer(${index})`);

        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = item.question;

        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.textContent = item.answer;

        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        faqList.appendChild(faqItem);
    });
}


function toggleAnswer(faqNumber) {
    const answer = document.querySelector(`.faq-item:nth-child(${faqNumber + 1}) .answer`);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}

generateFAQItems();




    $(document).ready(function () {
        // Set the initial slide index
        var currentSlide = 0;

        // Function to show the current slide
        function showSlide(index) {
            $(".slider-item").hide();
            $(".slider-item:eq(" + index + ")").fadeIn();
        }

        // Function to handle automatic slide change
        function autoSlide() {
            currentSlide = (currentSlide + 1) % 3;
            showSlide(currentSlide);
        }

        // Show the first slide initially
        showSlide(currentSlide);

        // Set interval for automatic slide change (adjust the interval as needed)
        var interval = setInterval(autoSlide, 2000);

        // Stop automatic slide change on hover
        $(".slider-container").hover(
            function () {
                clearInterval(interval);
            },
            function () {
                interval = setInterval(autoSlide, 3000);
            }
        );
    });


    
