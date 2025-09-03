CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`amount` text NOT NULL,
	`type` text NOT NULL,
	`category` text NOT NULL,
	`pending` integer NOT NULL,
	`created_at` text NOT NULL,
	`update_at` text NOT NULL
);
