# Home Gallery

Self-hosted alternative for Google Photos

## Development

### Prerequisites

-   Go
-   Node.js and npm

### Setup

1. Clone the repository

```bash
git clone https://github.com/ivteplo/home-gallery
```

2. Navigate to the cloned folder

```bash
cd home-gallery
```

3. Install dependencies

```bash
go mod tidy
```

4. Build the server

```bash
go build cmd/server/main.go
```

5. Run the built server

```bash
./main # if on Linux or macOS
./main.exe # if on Windows
```

6. Happy hacking! 🎉
