document.addEventListener("DOMContentLoaded", () => {
    const switchButton = document.getElementById("toggle_switch");
    const themeLink = document.getElementById("theme_style");

    if (!switchButton || !themeLink) return;

    const lightTheme = "Double stylesheet folder/style.css";
    const darkTheme  = "Double stylesheet folder/darkstyle.css";

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        themeLink.href = darkTheme;
        switchButton.checked = true;
    } else {
        themeLink.href = lightTheme;
        switchButton.checked = false;
    }
    
    switchButton.addEventListener("change", () => {
        if (switchButton.checked) {
            themeLink.href = darkTheme;
            localStorage.setItem("theme", "dark");
        } else {
            themeLink.href = lightTheme;
            localStorage.setItem("theme", "light");
        }
    });
});
