import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUserData(formData) {
  const { password: newPassword, fullName, avatar: avatarFile } = formData;

  const imgAvatar = `https://luyfbsblgucgyftnytkh.supabase.co/storage/v1/object/public/users/${avatarFile.name}`;

  const { data: userData, error: userDataError } =
    await supabase.auth.updateUser({
      password: newPassword,
      data: { fullName: fullName, avatar: imgAvatar },
    });

  if (userDataError) throw new Error(userDataError.message);

  const { data: imageUploadData, error: imageUploadError } =
    await supabase.storage
      .from("users")
      .upload(`${avatarFile.name}`, avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });

  if (imageUploadError) throw new Error(imageUploadError.message);
}
