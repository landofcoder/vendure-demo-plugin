import {MigrationInterface, QueryRunner} from "typeorm";

export class product1593929947602 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_9a5a6a556f75c4ac7bfdd03410"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d8791f444a8bf23fe4c1bc020c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6fb55742e13e8082954d0436dc"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_order_item" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "unitPrice" integer NOT NULL, "unitPriceIncludesTax" boolean NOT NULL, "taxRate" decimal(5,2) NOT NULL, "pendingAdjustments" text NOT NULL, "cancelled" boolean NOT NULL DEFAULT (0), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fulfillmentId" integer, "refundId" integer, "lineId" integer, CONSTRAINT "FK_69384323444206753f0cdeb64e0" FOREIGN KEY ("lineId") REFERENCES "order_line" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eed51be48640c21e1c76d3e9fbe" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e5161133689fba526377cbccd3" FOREIGN KEY ("refundId") REFERENCES "refund" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_order_item"("createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId") SELECT "createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId" FROM "order_item"`, undefined);
        await queryRunner.query(`DROP TABLE "order_item"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_order_item" RENAME TO "order_item"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_tax_rate" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "enabled" boolean NOT NULL, "value" decimal(5,2) NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "categoryId" integer, "zoneId" integer, "customerGroupId" integer, CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_tax_rate"("createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId") SELECT "createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId" FROM "tax_rate"`, undefined);
        await queryRunner.query(`DROP TABLE "tax_rate"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_tax_rate" RENAME TO "tax_rate"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_order_item" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "unitPrice" integer NOT NULL, "unitPriceIncludesTax" boolean NOT NULL, "taxRate" decimal(5,2) NOT NULL, "pendingAdjustments" text NOT NULL, "cancelled" boolean NOT NULL DEFAULT (0), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fulfillmentId" integer, "refundId" integer, "lineId" integer, CONSTRAINT "FK_69384323444206753f0cdeb64e0" FOREIGN KEY ("lineId") REFERENCES "order_line" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eed51be48640c21e1c76d3e9fbe" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e5161133689fba526377cbccd3" FOREIGN KEY ("refundId") REFERENCES "refund" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_order_item"("createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId") SELECT "createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId" FROM "order_item"`, undefined);
        await queryRunner.query(`DROP TABLE "order_item"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_order_item" RENAME TO "order_item"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_tax_rate" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "enabled" boolean NOT NULL, "value" decimal(5,2) NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "categoryId" integer, "zoneId" integer, "customerGroupId" integer, CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_tax_rate"("createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId") SELECT "createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId" FROM "tax_rate"`, undefined);
        await queryRunner.query(`DROP TABLE "tax_rate"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_tax_rate" RENAME TO "tax_rate"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_job_record" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueName" varchar NOT NULL, "data" text, "state" varchar NOT NULL, "progress" integer NOT NULL, "result" text, "error" varchar, "startedAt" datetime(6), "settledAt" datetime(6), "isSettled" boolean NOT NULL, "retries" integer NOT NULL, "attempts" integer NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_job_record"("createdAt", "updatedAt", "queueName", "data", "state", "progress", "result", "error", "startedAt", "settledAt", "isSettled", "retries", "attempts", "id") SELECT "createdAt", "updatedAt", "queueName", "data", "state", "progress", "result", "error", "startedAt", "settledAt", "isSettled", "retries", "attempts", "id" FROM "job_record"`, undefined);
        await queryRunner.query(`DROP TABLE "job_record"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_job_record" RENAME TO "job_record"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6fb55742e13e8082954d0436dc" ON "search_index_item" ("productName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d8791f444a8bf23fe4c1bc020c" ON "search_index_item" ("productVariantName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a5a6a556f75c4ac7bfdd03410" ON "search_index_item" ("description") `, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_9a5a6a556f75c4ac7bfdd03410"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d8791f444a8bf23fe4c1bc020c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6fb55742e13e8082954d0436dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "job_record" RENAME TO "temporary_job_record"`, undefined);
        await queryRunner.query(`CREATE TABLE "job_record" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "queueName" varchar NOT NULL, "data" text, "state" varchar NOT NULL, "progress" integer NOT NULL, "result" text, "error" varchar, "startedAt" datetime(6), "settledAt" datetime(6), "isSettled" boolean NOT NULL, "retries" integer NOT NULL, "attempts" integer NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "job_record"("createdAt", "updatedAt", "queueName", "data", "state", "progress", "result", "error", "startedAt", "settledAt", "isSettled", "retries", "attempts", "id") SELECT "createdAt", "updatedAt", "queueName", "data", "state", "progress", "result", "error", "startedAt", "settledAt", "isSettled", "retries", "attempts", "id" FROM "temporary_job_record"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_job_record"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" RENAME TO "temporary_tax_rate"`, undefined);
        await queryRunner.query(`CREATE TABLE "tax_rate" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "enabled" boolean NOT NULL, "value" decimal(5,2) NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "categoryId" integer, "zoneId" integer, "customerGroupId" integer, CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "tax_rate"("createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId") SELECT "createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId" FROM "temporary_tax_rate"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_tax_rate"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_item" RENAME TO "temporary_order_item"`, undefined);
        await queryRunner.query(`CREATE TABLE "order_item" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "unitPrice" integer NOT NULL, "unitPriceIncludesTax" boolean NOT NULL, "taxRate" decimal(5,2) NOT NULL, "pendingAdjustments" text NOT NULL, "cancelled" boolean NOT NULL DEFAULT (0), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fulfillmentId" integer, "refundId" integer, "lineId" integer, CONSTRAINT "FK_69384323444206753f0cdeb64e0" FOREIGN KEY ("lineId") REFERENCES "order_line" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eed51be48640c21e1c76d3e9fbe" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e5161133689fba526377cbccd3" FOREIGN KEY ("refundId") REFERENCES "refund" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "order_item"("createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId") SELECT "createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId" FROM "temporary_order_item"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_order_item"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" RENAME TO "temporary_tax_rate"`, undefined);
        await queryRunner.query(`CREATE TABLE "tax_rate" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "enabled" boolean NOT NULL, "value" decimal(5,2) NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "categoryId" integer, "zoneId" integer, "customerGroupId" integer, CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "tax_rate"("createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId") SELECT "createdAt", "updatedAt", "name", "enabled", "value", "id", "categoryId", "zoneId", "customerGroupId" FROM "temporary_tax_rate"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_tax_rate"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_item" RENAME TO "temporary_order_item"`, undefined);
        await queryRunner.query(`CREATE TABLE "order_item" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "unitPrice" integer NOT NULL, "unitPriceIncludesTax" boolean NOT NULL, "taxRate" decimal(5,2) NOT NULL, "pendingAdjustments" text NOT NULL, "cancelled" boolean NOT NULL DEFAULT (0), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fulfillmentId" integer, "refundId" integer, "lineId" integer, CONSTRAINT "FK_69384323444206753f0cdeb64e0" FOREIGN KEY ("lineId") REFERENCES "order_line" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eed51be48640c21e1c76d3e9fbe" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e5161133689fba526377cbccd3" FOREIGN KEY ("refundId") REFERENCES "refund" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "order_item"("createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId") SELECT "createdAt", "updatedAt", "unitPrice", "unitPriceIncludesTax", "taxRate", "pendingAdjustments", "cancelled", "id", "fulfillmentId", "refundId", "lineId" FROM "temporary_order_item"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_order_item"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6fb55742e13e8082954d0436dc" ON "search_index_item" ("productName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d8791f444a8bf23fe4c1bc020c" ON "search_index_item" ("productVariantName") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a5a6a556f75c4ac7bfdd03410" ON "search_index_item" ("description") `, undefined);
   }

}