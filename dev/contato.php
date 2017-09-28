<?php include('header.php') ?>

<main>
    <div class="banner banner__contato"></div>
    <div class="contato-geral">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Contato</h2>
                    <h5 class="section-header__subtitulo">Para mais informações, entre em contato conosco</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="contato-geral__formulario">
                        <h3>Deixe sua mensagem</h3>
                        <form action="">
                            <input type="text" placeholder="Nome">
                            <input type="text" placeholder="Email">
                            <div class="contato-geral__formulario__select">
                                <input type="text" readonly="true" class="contato-geral__formulario__selected-option" placeholder="Escolha um assunto">
                                <ul class="contato-geral__formulario__select-items">
                                    <li><a href="#">Elogio</a></li>
                                    <li><a href="#">Crítica</a></li>
                                    <li><a href="#">Sugestão</a></li>
                                    <li><a href="#">Trabalhe na Bontec</a></li>
                                    <li><a href="#">Seja um parceiro</a></li>
                                    <li><a href="#">Outros</a></li>
                                </ul>
                            </div>
                            <textarea placeholder="Mensagem"></textarea>
                            <input type="submit" value="Enviar" class="form-submit">
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contato-geral__mais-informacoes">
                        <h3 class="contato-geral__mais-informacoes__header-horario">Horário de Funcionamento</h3>
                        <strong>Segunda à Sexta-feira:</strong>
                        <p>8:00h às 18:00h</p>
                        <strong>Sábado:</strong>
                        <p>8:00h às 12:00h</p>

                        <h3 class="contato-geral__mais-informacoes__header-telefone">Telefone</h3>
                        <p>(21) 2556-4327</p>

                        <h3 class="contato-geral__mais-informacoes__header-email">Email</h3>
                        <strong>Setor financeiro:</strong>
                        <p>financeiro@bontec.com.br</p>
                        <strong>Setor comercial</strong>
                        <p>comercial@bontec.com.br</p>
                        <strong>Setor assistência técnica</strong>
                        <p>assistenciatecnica@bontec.com.br</p>
                        <strong>Assuntos gerais</strong>
                        <p>bontec@bontec.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contato-mapa">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Nossa localização</h2>
                    <h5 class="section-header__subtitulo">Estamos atualmente na Rua Ipiranga, 53 - Laranjeiras - Rio de Janeiro</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.65224485864087!2d-43.18240929914639!3d-22.934167702932353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f8f9bbce557%3A0xcde91bcb50a0aa90!2sBONTEC!5e0!3m2!1spt-BR!2sbr!4v1506447002739" width="100%" height="600" frameborder="0" style="border:0; margin-bottom: 120px" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</main>

<?php include('footer.php') ?>