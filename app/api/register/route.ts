import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const {name, email, password} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({name, email, password: hashedPassword});

    return new Response(JSON.stringify({message: "Usuario registrado com sucesso"}), {status: 201});
  } catch (error) {
    return new Response(JSON.stringify({message: "Erro ao registrar usuario"}), {status: 500});
  }
}
