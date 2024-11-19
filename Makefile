.PHONY: dev

dev:
	export $(grep -v '^#' .env.dev | xargs)
	docker-compose --env-file .env.dev -f docker-compose.yml up --build -d