import { Sequelize } from "sequelize";

const connectDB = async () => {
  try {
    const sequelize = new Sequelize(process.env.POSTGRES_URI as string, {
      dialect: "postgres",
      logging: false, // Disable logging, or set to true for detailed queries
    });

    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (error: any) {
    console.log("Unable to connect to the database:", error.message);
  }
};

export default connectDB;
