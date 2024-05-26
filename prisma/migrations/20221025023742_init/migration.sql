-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "vc_name" VARCHAR NOT NULL,
    "vc_last_name" VARCHAR NOT NULL,
    "vc_password" VARCHAR NOT NULL,
    "vc_avatar" VARCHAR NOT NULL,
    "vc_phone" VARCHAR,
    "vc_email" VARCHAR NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID,
    "dt_inactivated" TIMESTAMP(6),

    CONSTRAINT "pk_users_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL,
    "vc_balance" VARCHAR NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID,
    "user_id" UUID NOT NULL,

    CONSTRAINT "pk_accounts_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" UUID NOT NULL,
    "vc_description" VARCHAR NOT NULL,
    "vc_value" VARCHAR NOT NULL,
    "vc_type" UUID,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "account_id" UUID NOT NULL,
    "bl_is_revenue" BOOLEAN NOT NULL,
    "bl_is_expense" BOOLEAN NOT NULL,

    CONSTRAINT "pk_expenses_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "vc_name" VARCHAR NOT NULL,
    "vc_type" VARCHAR NOT NULL,
    "vc_value" VARCHAR,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID NOT NULL,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID NOT NULL,
    "dt_inactivated" TIMESTAMP(6),

    CONSTRAINT "pk_categories" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_items" (
    "id" UUID NOT NULL,
    "vc_name" VARCHAR NOT NULL,
    "vc_type" VARCHAR NOT NULL,
    "vc_value" VARCHAR,
    "category_id" UUID NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID NOT NULL,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID NOT NULL,
    "dt_inactivated" TIMESTAMP(6),

    CONSTRAINT "pk_category_items" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_vc_type_key" ON "categories"("vc_type");

-- CreateIndex
CREATE UNIQUE INDEX "category_items_vc_type_key" ON "category_items"("vc_type");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "fk_accounts_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "fk_expenses_type_id" FOREIGN KEY ("vc_type") REFERENCES "category_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "fk_expenses_account_id" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "fk_categories_update_user" FOREIGN KEY ("update_user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "fk_categories_create_user" FOREIGN KEY ("create_user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_items" ADD CONSTRAINT "fk_category_items_category" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_items" ADD CONSTRAINT "fk_category_items_create_user" FOREIGN KEY ("create_user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_items" ADD CONSTRAINT "fk_category_items_update_user" FOREIGN KEY ("update_user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
