const skillBars = document.querySelectorAll('.skillBar');

skillBars.forEach((skillBar) => {
  skillBar.addEventListener('mouseover', () => {
    const popup = skillBar.querySelector('.popup');
    popup.style.display = 'block';
  });

  skillBar.addEventListener('mouseout', () => {
    const popup = skillBar.querySelector('.popup');
    popup.style.display = 'none';
  });
});

const addressBlock = document.querySelector('.addressBlock');

function addressBlocks() {
  let greeting = document.querySelector(".greeting");
  let text =
    "<h4>Greetings!</h4><p>It’s a pleasure to virtually meet you. While working in the publishing and nonprofit sectors, I saw a real need for technical skills. I’m ready to pivot my career to the tech side, so I can help even more companies and organizations tell their stories with interactive, data-informed tools. I’d love to learn more about your technical needs and the types of clients you serve. How can my insights into publishing and philanthropy add to your toolset?</p>";
  greeting.innerHTML = text;
}

addressBlock.addEventListener('mouseover', addressBlocks);

document.body.style.cursor = 'pointer';