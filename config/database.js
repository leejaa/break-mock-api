module.exports = ({ env }) => ({
  // defaultConnection: 'default',
  // connections: {
  //   default: {
  //     connector: 'bookshelf',
  //     settings: {
  //       client: 'sqlite',
  //       filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  //     },
  //     options: {
  //       useNullAsDefault: true,
  //     },
  //   },
  // },
  defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST", "ec2-3-226-211-228.compute-1.amazonaws.com"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "del0vp6lpnsjc4"),
            username: env("DATABASE_USERNAME", "frtsyjfbckgtio"),
            password: env("DATABASE_PASSWORD", "2c565a326fb10b8fc95611b3d5726b44cdd53984cbab34f3e0e36f6628e821d0"),
            schema: env("DATABASE_SCHEMA", "public"),
          },
          options: {},
        },
      },
});
