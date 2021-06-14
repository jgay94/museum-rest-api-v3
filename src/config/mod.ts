import { parse } from "encoding/yaml.ts";

type Configuration = {
  web: {
    port: number;
    hostname: string;
  };
  cors: {
    allowedOrigins: string[];
  };
  ssl: {
    key: string;
    certificate: string;
  };
};

export async function load(env = "dev"): Promise<Configuration> {
  const configuration = parse(
    await Deno.readTextFile(`./config.${env}.yaml`),
  ) as Configuration;

  return configuration;
}
