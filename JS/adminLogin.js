function openLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('loginButtonPlaceholder').style.display = 'none';
}

async function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
  });

  const data = await response.json(); // Handle JSON response
  if (data.success) {
    await fetchAdminStatus(); // Fetch admin status and update UI
    // Optionally redirect to the admin page
    window.location.href = '/admin.html';
  } else {
    console.error(data.message); // Log the error message from the server
  }
}

// Fetch admin status from server
async function fetchAdminStatus() {
  try {
    const response = await fetch('/status', { credentials: 'include' });
    const data = await response.json();
    console.log('Admin Status Response:', data);

    const adminStatus = data.admin || false;
    console.log('Admin Status:', adminStatus);
    updateUI(adminStatus);
  } catch (error) {
    console.error('Error fetching admin status:', error);
  }
}

// Update the UI based on admin status
function updateUI(adminStatus) {
  console.log('Updating UI with admin status:', adminStatus); // Added for debugging
  const adminContent = document.getElementById('adminContent');
  const loginForm = document.getElementById('loginForm');
  const logoContainer = document.getElementById('logoContainer');
  const headerContainer = document.getElementById('headerContainer');
  const sidebarContainer = document.getElementById('sidebarContainer');

  if (adminStatus) {
    // User is authenticated, show admin content
    adminContent.style.display = 'block';
    loginForm.style.display = 'none';
    logoContainer.style.display = 'block';
    headerContainer.style.display = 'block';
    sidebarContainer.style.display = 'block';
  } else {
    // User is not authenticated, hide admin content
    adminContent.style.display = 'none';
    loginForm.style.display = 'block';
    logoContainer.style.display = 'none';
    headerContainer.style.display = 'none';
    sidebarContainer.style.display = 'none';
  }
}

// Fetch admin status when the page loads
document.addEventListener('DOMContentLoaded', async function () {
  await fetchAdminStatus();
});