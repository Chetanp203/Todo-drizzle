CREATE TABLE `todo_post` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `todo_post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `todo_task` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`title` varchar(256),
	`is_completed` boolean DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `todo_task_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `todo_post` (`name`);