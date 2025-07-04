from django.shortcuts import render, redirect

def index(request):
    paid = request.session.get('paid', False)
    question = request.GET.get('question', '')
    answer = ''

    if paid and question:
        if "2x + 3 = 7" in question:
            answer = "Solution: Subtract 3 from both sides: 2x = 4. Divide by 2: x = 2."
        else:
            answer = "Sorry, I can’t solve that yet. Try a simple equation like '2x + 3 = 7'!"
        request.session['paid'] = False  # Reset paid flag

    return render(request, 'helper/index.html', {
        'question': question,
        'answer': answer
    })


def paywall(request):
    # GET the question from the URL like ?question=...
    question = request.GET.get('question', '')
    return render(request, 'helper/paywall.html', {'question': question})


def pay(request):
    if request.method == 'POST':
        question = request.POST.get('question', '')
        request.session['paid'] = True
        return redirect(f'/?question={question}')  # Redirect back with question in URL
    return redirect('index')
