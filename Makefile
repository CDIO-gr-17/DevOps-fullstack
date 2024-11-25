.PHONY: dev frontend prod

dev:
	export $(grep -v '^#' .env.dev | xargs)
	docker-compose --env-file .env.dev -f docker-compose.yml up --build -d

frontend:
	export $(grep -v '^#' .env.dev | xargs)
	docker-compose --env-file .env.dev -f docker-compose.yml up --build -d
	cd Frontend && npm run dev

prod:
	export $(grep -v '^#' .env.prod | xargs)
	docker-compose --env-file .env.prod -f docker-compose.prod.yml up --build -d