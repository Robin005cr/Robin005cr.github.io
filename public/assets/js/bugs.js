function copyCode(button) {
  const code = button.parentElement.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.textContent = "✅";
    setTimeout(() => button.textContent = "📋", 1500);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  var headings = document.querySelectorAll('.heading-animate');
  headings.forEach(function(h, i) {
    h.style.animationDelay = (i * 0.2) + 's';
  });
});
