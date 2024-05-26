import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async function prismaSeed() {
  try {
    await prisma.$queryRaw`INSERT INTO public.users (id,vc_name,vc_last_name,vc_password,vc_avatar,vc_phone,vc_email,dt_create,create_user_id,dt_update,update_user_id,dt_inactivated) VALUES
	    ('4d3ef714-6e19-414c-87fd-b02c21fbf69b','Suporte','Admin','123','https://ui-avatars.com/api/?background=0D8ABC&color=fff&bold=true&size=128&name=Suporte','(11) 98765-4321','admin@gmail.com','2021-12-23 15:51:05.281','4d3ef714-6e19-414c-87fd-b02c21fbf69b','2022-01-27 15:06:01.724383',NULL,NULL),
      ('c4b58bb3-1564-4d28-ac5a-bc34b4bbc5e2','Suporte [2]','Admin [2]','123','https://ui-avatars.com/api/?background=0D8ABC&color=fff&bold=true&size=128&name=Suporte+2','(13) 98765-4321','admin2@gmail.com', '2021-12-23 15:51:05.281','4d3ef714-6e19-414c-87fd-b02c21fbf69b','2022-01-27 15:06:01.724383',NULL,NULL) ON CONFLICT DO NOTHING;`;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  await prisma.$disconnect();
})();
