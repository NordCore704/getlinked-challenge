export function validateForm(formData) {
  const errors = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!formData.team_name.trim()) {
    errors.team_name = "Team Name is required";
  }
  if (!formData.project_topic.trim()) {
    errors.project_topic = "Project Topic is required";
  }

  // if (!formData.email.trim()) {
  //   errors.email = "Email is required";
  // } else if (emailPattern.test(formData.email)) {
  //   errors.email = "Invalid email format";
  // }

  if (!formData.phone_number) {
    errors.phone_number = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone_number)) {
    errors.phone = "Invalid phone number format";
  }

  if (!formData.group_size) {
    errors.group_size = "group size is required";
  } else if (isNaN(formData.group_size)) {
    errors.group_size = "Please enter a valid number";
  }

  if (!formData.privacy_poclicy_accepted) {
    errors.privacy_policy_accepted = "You must agree to the terms";
  }

  return errors;
}

export const validateContactForm = (formData) => {
  const errors = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!formData.first_name.trim()) {
    errors.first_name = "First name is required";
  }
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }
  // // if (!formData.email.trim()) {
  // //   errors.email = "Email is required";
  // // } else if (emailPattern.test(formData.email)) {
  // //   errors.email = "Invalid email format";
  // }
  if (!formData.phone_number) {
    errors.phone_number = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone_number)) {
    errors.phone = "Invalid phone number format";
  }

  return errors;
};
