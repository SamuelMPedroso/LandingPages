# Repositório de Landing Pages

Este repositório centraliza várias landing pages em um único lugar.

Cada landing page fica isolada em sua própria pasta, com estrutura, dependências e tecnologias independentes das demais. Não existe um padrão obrigatório de linguagem ou framework: cada projeto pode ter sido desenvolvido com HTML, CSS, JavaScript, PHP, React, Vue, ou qualquer outra stack necessária.

## Objetivo

Organizar e manter diferentes landing pages em um único repositório, facilitando:

- a separação entre projetos
- a manutenção individual de cada landing page
- a reutilização do mesmo repositório para múltiplas campanhas, clientes ou produtos

## Estrutura

Cada pasta na raiz representa uma landing page diferente:

```text
/
|-- landing-page-01/
|-- landing-page-02/
|-- campanha-produto-x/
|-- evento-2026/
```

Cada diretório pode conter sua própria organização interna, por exemplo:

- arquivos estáticos
- código-fonte
- assets
- configurações específicas
- dependências próprias

## Padrão do repositório

O único padrão adotado neste repositório é:

- cada landing page deve ficar em uma pasta separada

Fora isso, a tecnologia utilizada pode variar conforme a necessidade de cada projeto.

## Como usar

1. Acesse a pasta da landing page desejada.
2. Verifique se existe alguma instrução específica dentro da própria pasta.
3. Execute ou publique o projeto conforme a stack utilizada naquela landing page.

## Observações

- Nem todas as landing pages terão a mesma estrutura.
- Nem todos os projetos usarão o mesmo processo de build ou execução.
- Recomenda-se que cada pasta tenha seu próprio arquivo de instruções quando houver passos específicos.

## Boas práticas sugeridas

- manter nomes de pastas claros e descritivos
- separar assets dentro da própria landing page
- documentar dependências específicas quando necessário
- evitar compartilhar arquivos entre landing pages sem uma justificativa clara

## Manutenção

Ao adicionar uma nova landing page:

1. Crie uma nova pasta na raiz do repositório.
2. Mantenha todos os arquivos do projeto dentro dessa pasta.
3. Adicione instruções específicas se a landing page exigir instalação, build ou configuração.

