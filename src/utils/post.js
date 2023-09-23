const baseUrl = "https://backend.getlinked.ai";

export const postForm = async (postData) => {
  try {
    const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error creating post request:", error);
    throw new error();
  }
};

export const postRegistration = async (postData) => {
  try {
    const response = await fetch(baseUrl + "/hackathon/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error creating post request:", error);
    throw new error();
  }
};
