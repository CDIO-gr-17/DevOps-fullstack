.PHONY: dev frontend

dev:
	export $(grep -v '^#' .env.dev | xargs)
	docker-compose --env-file .env.dev -f docker-compose.yml up --build -d

frontend:
	export $(grep -v '^#' .env.dev | xargs)
	docker-compose --env-file .env.dev -f docker-compose.yml up --build -d
	cd Frontend && npm run dev
